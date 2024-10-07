---
title: "Heartbeat"
category: "Distributed System"
date: "2024-10-06"
---
### What is Heartbeat?

- Mechanism to check the health and availability of components in distributed systems
- Involves sending regular, periodic signals, often referred to as "heartbeat messages," from one system component to another (typically between servers, services, or nodes) to confirm that they are still operational

## How it works?

1. A component (server or a service) sends a signal to another component
   at regular intervals
2. Receiver monitors the signal and if it doesn't receive the signal within a timeframe, it assumes that the sender is offline or unreachable. This triggers a failure detection mechanism, which may initiate corrective actions, such as restarting the failed component, rerouting traffic, or triggering alerts for system administrators.
3. Leader election - In consensus algorithms like Paxos, heartbeats are used to maintain the leader. If the leader doesn't send message, a new leader is chosen
4. Load balancers use heartbeats or similar health checks to determine which servers are healthy and can accept traffic. If a server fails to respond to heartbeats, the load balancer will stop sending requests to that server.
5. Resource Management: Heartbeats can also be used for resource tracking and to release or reallocate resources if a component appears to be down or unresponsive.

## Types of heartbeat mechanism

1. Push based heartbeat- More network overhead but more reliable
2. Pull Based heartbeat - Less overhead but less reliable

### Use cases
1. BLE -> When two BLE devices are connected, they exchange packets at regular intervals called connection events. If one device fails to receive packets from the other for a period exceeding the connection supervision timeout, it assumes that the connection is lost and disconnects.
2. Wearables like smart watches, rings send keep alive messages or short data packets at regular intervals to maintain the connection
3. Medical Devices and Health Monitoring like Pacemakers
4. Smart Home and IoT Applications - Security cameras, door sensors, and other smart devices use heartbeat messages to report their status to a central hub
5. Financial systems - ATMs send regular heartbeat messages to the bank’s central system to indicate they are online and functional.

| Feature               | Heartbeat                                      | Polling                                       |
|-----------------------|------------------------------------------------|-----------------------------------------------|
| **Initiator**         | Monitored component (server, device, etc.)     | Monitoring component (client, server, etc.)   |
| **Direction**         | Proactive from monitored to monitor           | Monitor actively requests updates             |
| **Efficiency**        | Generally more efficient, lower overhead      | Can be less efficient, higher network overhead|
| **Latency**           | Low, depending on heartbeat interval          | Varies with polling frequency, potentially higher|
| **Use Cases**         | Health monitoring, distributed systems        | Client requests, data updates, when push is unavailable |
| **Network Overhead**  | Lower, periodic health checks                 | Higher, depends on polling frequency          |
