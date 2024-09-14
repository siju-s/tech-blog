---
title: "API Gateway"
category: "System design concepts"
date: "2024-09-14"
---
### What is API Gateway?

- Routes the request based on type like /order goes to Order service and /post goes to Post microservice
- Handles authorization
- Validates request before calling the service
- Can be used to handle rate limiting
- Can do logging as well
- Also, called as edge microservice

### Examples

- AWS API Gateway
- Zuul by Netflix

### Problems
1. Single Point of Failure: If the API Gateway goes down, all client requests will fail, making it a critical point in the system that requires high availability.

2. Latency: Adding an API Gateway introduces an additional network hop, which can increase the latency of requests. Complex requests that require data from multiple services may further add to the delay.

3. Scalability: As traffic grows, the API Gateway itself may need to scale. Managing and scaling the gateway effectively requires additional infrastructure and monitoring efforts.

4. Complexity: Centralizing concerns like authentication, routing, and monitoring in an API Gateway adds complexity to the architecture. Misconfiguration can cause issues across the entire system.

5. Security Risks: As the single entry point, the API Gateway becomes a target for attacks. A breach at the gateway level can expose underlying services. Incorrect security configurations or vulnerabilities could lead to sensitive data being compromised.

6. Bottleneck: In a microservices system, if the API Gateway becomes slow or overwhelmed, it can create a bottleneck that slows down the entire system. This can happen due to mismanagement of resources or traffic spikes.

7. Development Overhead: Teams must account for the API Gateway in their development processes, adding overhead. Implementing policies, maintaining versions, and managing different services through the gateway requires effort.