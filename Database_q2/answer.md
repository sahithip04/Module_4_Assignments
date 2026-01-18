# Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

Using a file like db.json may work for learning or very small demo projects, but it is not suitable for real-world applications.

**Limitations of file-based storage:**

* **Performance:** Every time data is read or written, the entire file may need to be accessed. As the file grows, operations become slow.
* **Scalability:** A JSON file cannot handle large amounts of data or many users at the same time. It does not scale when the application grows.
* **Concurrency issues:** If multiple users try to access or modify the file at the same time, data can get corrupted because there is no proper locking or transaction control.
* **Reliability:** If the application crashes while writing to the file, data can be lost or the file can become unusable.

Because of these issues, db.json is mainly useful for testing or mock APIs, not for production systems.

---

## 2. Ideal characteristics of a database system (apart from just storage)

A good database system does much more than just store data. Some important characteristics are:

* **Performance:** The database should be able to read and write data quickly, even when handling large datasets.
* **Concurrency:** It should allow multiple users or applications to access and update data at the same time without conflicts.
* **Reliability:** Data should remain safe even if there is a system crash or power failure.
* **Data integrity:** The database should ensure that data is accurate and consistent using rules like constraints and validations.
* **Scalability:** The system should be able to handle increasing amounts of data and users as the application grows.
* **Fault tolerance:** The database should be able to recover from failures using backups, replication, or recovery mechanisms.

These features make databases dependable for real-world applications.

---

## 3. Types of databases and their use cases

There are mainly two common types of databases used in applications:

### a) Relational Databases

Relational databases store data in tables with rows and columns. They use structured schemas and SQL for querying.

**Examples:** MySQL, PostgreSQL, Oracle, SQL Server

**Use cases:**

* Banking systems
* Student or employee management systems
* E-commerce applications (orders, payments, users)

They are best when data has clear relationships and consistency is very important.

---

### b) Non-Relational (NoSQL) Databases

NoSQL databases store data in flexible formats like documents, key-value pairs, or graphs. They do not require fixed schemas.

**Examples:** MongoDB, Firebase, Cassandra, Redis

**Use cases:**

* Social media applications
* Real-time chat applications
* Big data and analytics systems

They are useful when handling large-scale, unstructured, or rapidly changing data.
