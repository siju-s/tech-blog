---
title: "Load Balancer"
category: "System design concepts"
date: "2024-09-08"
---
### What is Load Balancer?

- Required to balance load in a distributed system
- Can be implemented in HTTP or TCP layers as well
- Can be hardware or software based
- Software based LB can run on server or virtual machine 


### Types of load balancing techniques

1. Round robin
2. Least connections
3. Consistent hashing
4. IP hash

### Load balancers
1. Nginx(can serve as both LB and Reverse proxy)
2. HAProxy
3. Amazon Elastic load balancer

### When to use

- Increased capacity or redundancy required
- Dont confuse with Rate limiters which are handled by API gateways

## Pros
1. Scalablility
2. Reliablity 
3. Performance - Load distributed evenly

### Load balancer vs API gateway vs Reverse proxy

| Feature/Functionality  | Load Balancer                                 | API Gateway                                  | Reverse Proxy                               |
|------------------------|-----------------------------------------------|---------------------------------------------|--------------------------------------------|
| **Primary Purpose**     | Distributes incoming network traffic across multiple servers to ensure high availability and reliability | Manages, routes, and controls API requests between clients and services | Forwards client requests to servers on behalf of clients, often used to mask the server identity |
| **Traffic Distribution**| Yes, balances traffic based on algorithms (round robin, least connections, etc.) | Handles traffic routing, often based on API versioning, microservice architecture | Does not balance traffic but forwards requests to the appropriate server |
| **Security**            | May offer SSL termination and some basic security features | Provides security features like rate limiting, authentication, authorization, and DDoS protection | Can handle SSL termination, hides backend servers for security |
| **Feature Set**         | Focuses on network-level traffic distribution and health checks | Offers API management, routing, transformation, and security | Simplifies routing and acts as a security layer, limited compared to API Gateways |
| **Request Routing**     | Routes traffic based on server performance, availability, and load | Routes based on API paths, methods, versions, and sometimes custom logic | Routes requests from clients to specific servers, typically static or rule-based |
| **Caching**             | Generally does not include caching mechanisms | Can implement caching at the API level | May implement basic caching, especially for static content |
| **Rate Limiting**       | No, but can be integrated with external tools | Yes, integral feature for API protection | Generally does not offer rate limiting natively |
| **Use Case**            | Best for ensuring availability and performance of applications by distributing load | Best suited for microservices, handling API requests, and implementing cross-cutting concerns like security, versioning, etc. | Suitable for server anonymity, SSL offloading, or when the client should not directly access backend services |


### References
https://www.youtube.com/watch?v=RqfaTIWc3LQ