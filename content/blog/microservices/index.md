---
title: "Microservices"
category: "Architecture"
date: "2024-08-25"
---
### What are Microservices?

- Independent services which can be scaled independently like Order, payment, user profile service  


### Monolithic vs Microservices

#### Monolithic
- Monolithic architecture has database, client side UI and server side logic in same codebase. 
- Easy to start developing
- Easy to deploy but harder to scale horizontally
- Risk to change since codebase is quite big
- Need to deploy whole application even if 1 single functionality changed
  

#### Microservice
- Microservice is responsible for 1 area of function. Microservices communicate using an API.
- More planning required to divide code into suitable microservices
- Easier to scale and modify

### Communication between Microservices

1. Synchronous - Using API calls
2. Asynchronous - Message Broker queues like RabbitMQ, Kafka. One service will publish messages to Broker and the other service will subscribe to the messages
3. Asynchronous - RPC


### When to use?

- Larger teams can use it to independently manage features
