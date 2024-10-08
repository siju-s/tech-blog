---
title: "Latency vs Throughput"
category: "System design concepts"
date: "2024-10-07"
---
### What is Latency?

- Amount of time taken for request to process. Can be
measured by ping time to a network.
- Aim for low latency

### What impacts Latency?

1. Location - If server is located far away from user, latency will be high
2. Network congestion - Congestion can lead to higher latency
3. Protocol efficiency - Some networks require additional protocols for security. The extra handshake steps create a delay.
    
  
### What is Throughput

Refers to the average volume of data that can actually pass through the network over a specific time

### What impacts Throughput?

1. Bandwidth - If your network capacity has reached the maximum bandwidth of your transmission medium, its throughput will never be able to go beyond that limit
2. Packet loss - Packet loss can occur for a variety of reasons, including network congestion, faulty hardware, or misconfigured network devices. When packets are lost, they must be retransmitted. This results in delays and reduces the overall throughput of the network.

### Difference

| **Aspect**           | **Latency**                                             | **Throughput**                                          |
|----------------------|---------------------------------------------------------|--------------------------------------------------------|
| **Definition**        | The time taken to process a single unit of data         | The amount of data processed over a period of time      |
| **Measurement**       | Measured in units of time (milliseconds, seconds, etc.) | Measured in units of data per time (bits/sec, MB/sec)   |
| **Focus**             | Speed of individual tasks                               | Volume of tasks or data processed                       |
| **Indicator**         | Delay in network or processing time                     | Capacity or efficiency of the system                    |
| **Optimization Goal** | Reduce time per operation                               | Increase total data processed over time                 |
| **Example**           | Time to load a webpage                                  | Number of webpages loaded per second                    |


### How to improve?

1. Caching - Cache data in CDN closer to the user
2. Transport protocols - Use appropriate one for use case. TCP gives high latency and high throughput so used for transferring data. UDP is used for streaming and gaming due to minimal latency
3. Quality of service - QoS allows to divide network traffic into specific categories. You can assign each category a priority level.


### References
https://aws.amazon.com/compare/the-difference-between-throughput-and-latency/