---
title: "SQL vs NoSQL"
category: "Database"
date: "2024-08-29"
---
### SQL vs NoSQL

| **Feature**                 | **SQL**                                                                 | **NoSQL**                                                      |
|-----------------------------|-------------------------------------------------------------------------|----------------------------------------------------------------|
| **Data Model**              | Relational (Tables with fixed schemas)                                  | Non-relational (Document, Key-Value, Graph, Column-family)      |
| **Schema**                  | Rigid, predefined schema with tables and columns                        | Flexible, dynamic schema                                        |
| **Scalability**             | Vertical scaling             | Horizontal scaling  |
| **Data Integrity**          | Strong ACID compliance (Atomicity, Consistency, Isolation, Durability)  | Eventual consistency, with some databases supporting ACID       |
| **Query Language**          | Structured Query Language (SQL)                                         | Varies by database (e.g., MongoDB uses BSON, Cassandra uses CQL)|
| **Use Case**                | Complex queries, transactions, multi-row operations                     | Unstructured data, large-scale distributed data, rapid development|
| **Examples**                | MySQL, PostgreSQL, Oracle                                               | MongoDB, Cassandra, Redis, Couchbase                            |
| **Performance**             | Generally optimized for complex queries and joins                       | Optimized for read/write operations, high throughput            |
| **Consistency**             | Strong consistency                                                      | Can vary (eventual consistency is common)                       |
| **Flexibility**             | Less flexible due to structured data                                    | Highly flexible, supports various data types and structures     |
| **Joins**                   | Supports JOIN operations across multiple tables                         | Generally does not support JOINs; instead, denormalization is used|
| **Transactions**            | Supports multi-row transactions                                         | Limited or no support for multi-document transactions           |
| **Storage**                 | Fixed format storage (rows and columns)                                 | JSON-like documents, key-value pairs, wide-columns, etc.        |


### Examples of No-SQL
1. Redis
2. Cassandra
3. Amazon Dynamo DB
4. MongoDB (Stores data in Binary JSON format)
5. ElasticSearch

### Applications using NoSQL

1. Amazon uses DynamoDB for shopping cart
2. Twitter uses Redis for caching and Cassandra for storing data
3. Uber uses Cassandra to store geolocation data
4. Airbnb uses Couchbase to store session data and ElasticSearch for search

### References
https://www.youtube.com/watch?v=xQnIN9bW0og&pp=ygUMc3FsIHZzIG5vc3Fs