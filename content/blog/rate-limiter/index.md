---
title: "Throttling and Rate limiting"
category: "System design concepts"
date: "2024-10-09"
---
### What is Throttling?
- Technique to ensure that the system can handle requests at an acceptable rate from a user, service, IP address etc

### Why throttle?
- Prevent against DDOS attacks
- Limit requests due to cost. Ex: Charging user based on API key
- Allow num requests which can be handled

### How its done?

API Requests: Limiting the number of requests a client can make to a server (e.g., 100 requests per minute).
Login Attempts: Restricting the number of login attempts to prevent brute-force attacks.
Messaging Systems: Controlling how often messages can be sent in chat applications or systems to avoid spamming.
Traffic Control: Preventing overloading of a service by limiting the number of operations from a particular source.

### Rate limiting algorithms

1. Token bucket
    - Maintains a bucket of tokens
    - Each request consumes token
    - Once bucket is empty, takes time to refill
    - Good for burst handling like user can send 50 requests and then wait
2. Leaky bucket
    - Bucket that leaks requests at steady rate
    - Example - Video streaming services
3. Fixed window
    - Fixed window of time to carry out all requests
    - Ex: APIs allowing 100 requests per minute
4. Sliding window
    - Algorithm keeps track of individual request timestamps and only counts those within the sliding window
    - Provides smoother rate limiting over time without sudden resets, useful for real-time applications    

| **Pros**                                | **Cons**                                                      |
|-----------------------------------------|---------------------------------------------------------------|
| Prevents abuse and denial-of-service (DoS) attacks | Requires careful tuning to avoid blocking legitimate users     |
| Ensures fair usage of shared resources  | Adds complexity to system design                              |
| Protects system performance and stability | May frustrate users if limits are too restrictive              |
| Smooths traffic spikes and prevents system overload | False positives: legitimate users might get blocked            |
| Provides security against brute-force attacks | Can introduce latency if limits are reached frequently         |
| Reduces operational costs by limiting overuse | Implementation overhead, especially with advanced algorithms   |
| Helps balance load across multiple users or clients | Can be bypassed by attackers if not properly enforced          |

### Advanced Rate Limiting Strategies:
  IP-Based: Limiting requests per IP address, common for public APIs.
  User-Based: Limits requests for authenticated users, commonly used in web services.
  Geo-Based: Rate limiting based on geographic location to prevent regional overloading.
  Dynamic Rate Limiting: Adapting rate limits based on system load or user activity. For example, if the system is under high load, limits can be lowered temporarily to maintain stability.

### References
https://www.youtube.com/watch?v=CW4gVlU0xtU  
