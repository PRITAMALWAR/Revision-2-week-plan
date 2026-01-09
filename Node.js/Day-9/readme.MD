

1. What is database scaling? Explain vertical vs horizontal scaling.

ans =
Database scaling means increasing database capacity to handle more data or more users.

Vertical scaling (Scale Up):
We increase resources of the same server like CPU, RAM, disK.
Example: upgrading DB server from 8GB RAM to 32GB RAM.
Easy to do but has hardware limit and single point of failure.

Horizontal scaling (Scale Out):
We add more database servers and distribute load.
Example: multiple DB nodes handling read/write traffic.
More complex but highly scalable and fault-tolerant.


2. What is database replication? Explain master-slave replication.

ans =
Database replication means copying data from one database to another to improve availability and performance.

Master-Slave replication:

Master DB handles write operations (INSERT, UPDATE, DELETE)
Slave DB handles read operations (SELECT)
Data from master is automatically copied to slave

example:
User registration =master DB
User profile view = slave DB

this improves **read performance and provides backup.


3. What is database sharding? How does it work?

ans =
Database sharding means splitting large data into smaller parts and storing them on different servers.

Each part is called a shard.

How it works:

Data is divided based on a shard key(userId, region, etc.)
Example:

   UserID 1–10000 → Shard 1
   UserID 10001–20000 → Shard 2

When a request comes, application decides which shard to query.

This helps in handling huge data and traffic.


4. What are the challenges of sharding?

ans =
Sharding improves performance but adds complexity.

Challenges:

 Complex queries (joins across shards are difficult)
 Re-sharding is hard when data grows
 Uneven data distribution (hot shards)
 Cross-shard transactions are complex
 Increased application logic

Example: fetching orders + users across multiple shards becomes difficult.


5. What is database partitioning? How does it differ from sharding?

ans =
Database partitioning means dividing a table into smaller parts inside the same database.

Example:
Orders table partitioned by:

2023 orders
2024 orders

Difference from sharding:

Partitioning               = Sharding             
Same database server       = Multiple servers     
Easier to manage           = More complex         
Improves query performance = Improves scalability 

Partitioning = within DB
Sharding = across DB servers


6. What is a connection pool? Why is it important?

ans =
A connection pool is a set of reusable database connections.

Instead of creating a new DB connection for every request, application reuses existing connections.

Why important:

Creating DB connections is expensive
Improves performance
Avoids connection exhaustion
Handles high traffic efficiently

Example: Backend keeps 20 open connections and reuses them.


7. What are N+1 queries? How do you solve this problem?

ans =
N+1 query problem happens when:

1 query fetches parent data
N queries fetch related child data

Example

1 query → get all users
N queries → get orders for each user

Total = N+1 queries (performance issue)

Solutions:

Use JOIN queries
Use eager loading
Use batch queries
Use ORM optimizations (include, preload)



8. What is caching? Explain different caching strategies.

ans =
Caching means storing frequently accessed data in memory (Redis, Memcached) to reduce database load.

Cache-Aside (Lazy Loading)

App checks cache first
If miss → fetch from DB → store in cache
Most commonly used

### Write-Through

Data written to cache and DB together
Cache always up-to-date
Slower write

Write-Back (Write-Behind)

Data written to cache first
DB updated later asynchronously
Faster write but risk of data loss


9. What is the CAP theorem?

ans =
CAP theorem states that a distributed system can provide only two out of three:

C = Consistency:All nodes return same data
A = Availability: System always responds
P = Partition Tolerance:System works even if network fails

Examples:

CP → MongoDB (Consistency + Partition)
AP → Cassandra (Availability + Partition)

You must choose trade-offs based on use case.


10. What are database transactions? What is MVCC?

ans =
A database transaction is a group of operations executed as a single unit.

It follows ACID properties:

atomicity
consistency
isolation
durability

Example:
Money transfer:

Debit from A
Credit to B
If any step fails → rollback.


MVCC (Multi-Version Concurrency Control)

ans =
MVCC allows multiple transactions to read and write simultaneously without blocking.

Instead of locking rows:

Database keeps multiple versions of data
Readers read old version
Writers create new version

Used in PostgreSQL, MySQL (InnoDB) for better performance.
