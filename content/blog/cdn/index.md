---
title: "Content Delivery Network(CDN)"
category: "System design concepts"
date: "2024-09-19"
---
### What is CDN?
- Server group which brings content closer to user
- Also called as edge server
- DNS routing commonly used to direct user to the latest
  edge server
- Static content stored in these edge servers

### How Does a CDN Work?
- Distribution of Content: When users request web content, a CDN directs them to the closest server that holds a cached version of the content.
- Caching: CDNs store copies of your content (like media files, JavaScript, CSS, etc.) at various edge servers located in data centers across the world.
- Proximity: By delivering content from a server geographically close to the user, it reduces the time it takes for data to travel.
- Load Balancing: CDNs can distribute traffic evenly among servers, ensuring no single server is overloaded.
- Improved Reliability: If one server fails, a CDN can reroute the request to another server, improving fault tolerance.

### Types of CDN
#### Push CDN 
- Push new files to CDNs manually by engineers
- Advantage is that no stale data in CDN cache
- Requires more maintenance


#### Pull CDN 
- Server cache is lazily updated
- First requests will be slower if data not present in cache
- Data could be stale if new assets updated in origin server

### Advantages
- Reduces latency due to servers being close to user
- Provides security from DDOS attacks

### Examples
- Amazon Cloudfront
- Cloudfare
- GCP Cloud CDN
- Azure CDN


### When to not use CDN
- If content is located in just 1 region, adding a CDN
   wouldn't offer any advantage. Just add more origin servers
- CDNs cache data, so if your website contains highly sensitive information, you might want to avoid using a CDN to keep control of the content more centralized and secure
- Low Traffic Websites: If your website gets very little traffic, the cost of using a CDN might not be worth the speed improvement