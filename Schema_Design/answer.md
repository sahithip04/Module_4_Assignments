# Schema Design Fundamentals

## What schema design is and what a database schema represents

Schema design is the process of deciding how data is structured inside a database and what rules that data must follow. A database schema is like a blueprint of the database. It defines:

- What tables exist
- What columns each table contains
- The data type of each column
- The constraints and rules that control the data

In simple terms, schema design is about organizing and protecting data properly before any application starts using it.

For example, in a user management system, the schema will define a `users` table, its columns such as `id`, `name`, `email`, and the rules like `email` must be unique and cannot be null.

---

## Why schema design is required before writing backend code

Schema design must come before backend development because APIs and backend logic depend completely on how the data is stored.

A common mistake is designing tables based on UI screens or forms. This leads to tables that are tightly connected to the frontend, and when the UI changes, the database also needs to change. This causes frequent schema modifications and breaks existing APIs.

The correct flow is:

1. Understand the business requirement
2. Identify the entities involved (users, products, orders, etc.)
3. Design the database schema
4. Build backend APIs on top of this schema
5. Connect the frontend to the APIs

If the schema is changed later, it may require data migration, API changes, and can even cause downtime. That is why schema design must be done carefully before coding the backend.

---

## How poor schema design impacts data consistency, maintenance, and scalability

Poor schema design can cause several serious problems:

- Duplicate data stored in multiple places
- Conflicting or inconsistent records
- Difficulty in updating or fixing data
- Performance issues as the database grows

For example, if user emails are stored in multiple tables without proper structure, updating an email becomes difficult and can lead to mismatched records.

Good schema design ensures:

- Data consistency
- Easy maintenance and updates
- Better performance
- Scalability as the application grows

---

## What validations are in schema design and why databases enforce validations

Validations in schema design are rules that the database uses to prevent invalid data from being stored. These validations are called constraints.

Some common constraints are:

- **PRIMARY KEY** – Uniquely identifies each row and cannot be null
- **NOT NULL** – Ensures a column always has a value
- **UNIQUE** – Prevents duplicate values
- **DEFAULT** – Provides a default value if none is given

Example:

```sql
email TEXT UNIQUE NOT NULL,
is_active BOOLEAN DEFAULT true

---

## The difference between a database schema and a database table

A database schema is the overall structure or blueprint of the entire database. It defines all the tables, the columns inside those tables, the data types of each column, and the constraints that control the data.

A table, on the other hand, is just one component inside the schema. It stores data related to a specific entity.

For example, a schema for an e-commerce application may contain tables such as:

- users
- products
- orders

Here, the schema is the complete design, while each of these is an individual table within that design.

---

## Why a table should represent only one entity

A good schema design follows the rule: **One table = one entity**.

An entity is a real-world concept such as a user, an order, or a product.

Examples of good tables:

- `users` → stores only user information
- `orders` → stores only order information
- `products` → stores only product information

A bad example would be a table like `users_and_orders` because it mixes two different entities in one place. This makes the data confusing, hard to maintain, and difficult to scale as the system grows.

Keeping one entity per table keeps the design clean, understandable, and maintainable.

---

## Why redundant or derived data should be avoided in table design

Redundant data means storing the same information in multiple places. Derived data means storing data that can be calculated from existing data.

Both should be avoided.

For example:

- Storing `date_of_birth` is correct.
- Storing `age` is wrong because age can be calculated from date of birth and it keeps changing over time.

If derived or redundant data is stored, it can easily become inconsistent when not updated properly. This increases bugs and reduces data reliability.

Avoiding redundancy ensures consistency and reduces unnecessary storage.

---

## The importance of choosing correct data types while designing tables

Choosing the correct data type is important because it improves data validation, storage efficiency, and performance.

Some examples of proper data type usage:

- `TEXT` for names and emails
- `INTEGER` for numeric values without decimals
- `BOOLEAN` for true/false values
- `UUID` for unique identifiers and primary keys
- `TIMESTAMP` for storing date and time information

Example:

```sql
id UUID PRIMARY KEY,
email TEXT UNIQUE NOT NULL,
is_active BOOLEAN DEFAULT true,
created_at TIMESTAMP DEFAULT now()

