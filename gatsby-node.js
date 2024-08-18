/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
const path = require(`path`)
const fs = require('fs');
const { createFilePath } = require(`gatsby-source-filesystem`)
const simpleGit = require('simple-git');

const git = simpleGit();
// Define the template for blog post
const blogPost = path.resolve(`./src/templates/blog-post.js`)

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: {createdDate: ASC} }, limit: 1000) {
        nodes {
          id
          fields {
            slug
            createdDate
            description
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent);
    const filePath = path.join(__dirname, 'content', 'blog', fileNode.relativePath);
    const stats = fs.statSync(filePath);

     // Use frontmatter date if available
     const frontmatterDate = node.frontmatter && node.frontmatter.date;

     let commitDate = null;

     if (!frontmatterDate) {
       // If frontmatter date is not available, get the git commit date
       try {
         const log = await git.log({ file: filePath });
         commitDate = log.latest ? new Date(log.latest.date).toISOString() : null;
       } catch (error) {
         console.error(`Error fetching git log for file ${filePath}`, error);
       }
     }

    createNodeField({
      name: `slug`,
      node,
      value,
    })

    const adjustedDate = new Date(frontmatterDate || commitDate || stats.birthtime.toISOString());
    // Adjust date to ensure it's always in UTC
    const utcDateString = new Date(adjustedDate.getTime() + adjustedDate.getTimezoneOffset() * 60000).toISOString().split('T')[0];

    console.log(`Utc Date for ${filePath}: ${utcDateString}`);

    // Generate creation date from the file's birth time
    createNodeField({
      name: `createdDate`,
      node,
      value: utcDateString,
    });

    // Generate description from the first two lines of the content
    const content = node.rawMarkdownBody;
    const description = content.split('\n').slice(0, 2).join(' ');

    createNodeField({
      name: `description`,
      node,
      value: description,
    });
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
      linkedin:String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
      createdDate: String
      description: String
    }
  `)
}
