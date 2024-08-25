---
title: "GraphQL"
category: "Communication"
date: "2024-08-24"
---
### What is GraphQL

- Query based language developed by Meta
- Fetch fields required  by client instead of overfetching or underfetching data
- Supports mutation and subscription
- Returns `JSON` response using `HTTP` similar to `REST`
- Use GraphQL browser IDE `grapiql` to create queries
```
query GetAllPosts {
    posts {
        id
        title
        content
    }
}

mutate AddNewPost($title: String!, $content:String) {
    addPost(title: $title, content:$content) {

    }
}
```

### Data fetching in REST vs GraphQL

Assume we want to fetch list of post of a specific id, here's how we will fetch it

#### REST,

`GET /posts/1`

#### GraphQL

```
type Query {
    post(id : ID!) : Post
}

GET /graphql?query={ post(id:'1') {title, content}}
```

## Pros

- Specify data required by client instead of what API sends
- Combine multiple requests into one API call
- Versioning not required. Resource URL remains same

## Cons
- Requires more tooling support like GraphQL client, schema
- Not suitable for simple CRUD APIs

### When to use

- When multiple hits to the API are required for fetching data
- When app needs to fetch data from multiple data sources like a dashboard that fetches data from multiple sources such as logging services, backends for consumption stats, third-party analytics tools to capture end-user interactions

## Tools
Use `Apollo Server` to test the queries. Similar to `PostMan`

### Credits
https://dzone.com/articles/why-and-when-to-use-graphql-1
