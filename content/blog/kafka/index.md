---
title: "Kafka"
category: "Event streaming"
date: "2024-08-26"
---
### What is Apache Kafka?

- Distributed event streaming platform
- Developed by LinkedIn and OSed in 2012
- Highly reliable message queue
- Fault tolerant
- High throughput not less storage so cant replace DB
- Kafka achieves high availability through replication. Each partition can have multiple replicas, distributed across different brokers. If a broker fails, another broker with a replica of the partition can take over, ensuring continuous operation.

### Core concepts
- Producer: A producer is a client that publishes (writes) messages to a Kafka topic.
- Consumer: A consumer is a client that subscribes to (reads) messages from a Kafka topic.
- Broker: A broker is a Kafka server that receives messages from producers, stores them, and serves them to consumers. Kafka clusters typically consist of multiple brokers.
- Topic: A topic is a category or feed name to which records are published. Topics are partitioned, and each partition is an ordered, immutable sequence of records.
- Partition: Each topic is divided into partitions, which allows Kafka to scale horizontally. Partitions are key to Kafka’s scalability and parallelism. Each partition can be hosted on a different broker, and messages within a partition are ordered.
- Offset: Each message within a partition has a unique identifier called an offset. Consumers use offsets to keep track of wh ich messages they have read.
- Consumer Group: A group of consumers that work together to consume messages from a topic. Kafka assigns each partition to a consumer within a group, allowing for parallel processing.

- 1 Consumer --> Consume multiple partitions 
- 1 partition !-> Cannot be consumed by multiple consumers without consumer grouping

### Uses
- Used by Uber and Netflix to store real time user analytics data
- Can collect metrics about system health
- Message brokering
- Log aggregation 

### Cons
- Resource intensive
- Steep learning curve 
- Not suitable for ultra low latency apps like trading


### Resources
https://www.youtube.com/watch?v=ZJJHm_bd9Zo 