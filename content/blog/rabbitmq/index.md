---
title: "RabbitMQ"
category: "Event streaming"
date: "2024-08-27"
---
### What is RabbitMQ?

- In memory message queue. No data retention
- Exchange sits between producer and queue to direct data to relevant queue
- Message is deleted from queue only once consumer has received the data and sent an ACK back to queue. Hence, no message loss
- Based on the Advanced Message Queuing Protocol message model(AMQP)
- Queues are connected to the consumer by a binding key

### Different types of exchange

1. Fan out - Message duplicated across all queues
2. Routing key - sends to queue matching the exact binding key
3. Topic - Matches based on topic
4. Header - Messages are moved through the system-based header
5. Default (specific to RabbitMQ not part of AMQP)- Matches routing key based on name of queue


### RabbitMQ vs Kafka

| **Aspect**                     | **RabbitMQ**                                            | **Kafka**                                                   |
|--------------------------------|---------------------------------------------------------|-------------------------------------------------------------|
| **Architecture**               | Traditional message broker using exchanges and queues   | Distributed event streaming platform with log-based storage |
| **Message Storage**            | Messages can be stored in memory or disk, persistence is optional | Messages are always written to disk with strong durability |
| **Use Cases**                  | Task distribution, real-time messaging, RPC             | Real-time data streaming, event sourcing, log aggregation   |
| **Routing**                    | Complex routing with exchanges (direct, topic, fanout, headers) | Simpler routing with topics and partitions                  |
| **Message Delivery Guarantees**| At-most-once or at-least-once, depending on configuration | At-least-once, at-most-once, and exactly-once semantics     |
| **Performance**                | Lower throughput, optimized for low-latency messaging   | High throughput, optimized for large-scale streaming        |
| **Scalability**                | Scales vertically, limited horizontal scalability       | Scales horizontally with partitions and brokers             |
| **Tooling and Ecosystem**      | Rich plugin ecosystem, AMQP protocol support            | Kafka Connect, Kafka Streams for integration and processing |
| **Fault Tolerance**            | Mirrored queues for high availability                   | Partition replication for fault tolerance and high availability |
| **Latency**                    | Optimized for low-latency                               | Optimized for throughput, with potential for higher latency under heavy load |
| **Consumer Model**             | Push-based model, consumers receive messages from queues | Pull-based model, consumers pull messages from partitions   |
| **State Management**           | Managed by broker, manual acknowledgments required      | Managed by consumers, automatic offset tracking             |


### Pros
- Cloud friendly. Easy to deploy
- Cross language support
- Acks from consumer so messages are not lost
- Lot of tools support
- Good security. Supports FASL, LDAP and TLS

### References
https://www.youtube.com/watch?v=7rkeORD4jSw
