# Understanding Project Management in NodeJS

## a. Package Managers

### What is a Package Manager?
A package manager is a tool that helps us install, update, and manage external libraries or packages needed for a project.  
In Node.js, packages are reusable code written by other developers.

For example, If I want to use Express.js, I don’t write it from scratch. I install it using a package manager.

---

### Why do we need Package Managers in Backend Development?
Backend applications depend on many libraries for:
- Routing
- Database connection
- Authentication
- Security

Package managers help:
- Save time
- Avoid rewriting code
- Manage versions of libraries

---

### Problems Faced if Package Managers are Not Used
If package managers are not used:
- We must manually download libraries
- Version conflicts occur
- Project setup becomes slow
- Team members may use different library versions

This makes the project unreliable and difficult to maintain.

---

## b. NPM (Node Package Manager)

### What is NPM?
NPM stands for Node Package Manager.  
It is the default package manager for Node.js and comes automatically when Node.js is installed.

---

### Why is NPM Important for Node.js Applications?
NPM is important because:
- It installs required packages
- It manages project dependencies
- It keeps track of versions used in the project

Without NPM, Node.js development would be very inefficient.

---

### How NPM Helps in Managing Dependencies
NPM:
- Installs dependencies using `npm install`
- Stores dependency details in `package.json`
- Locks exact versions using `package-lock.json`

---

## c. Backend Project Initialization

### Command Used to Initialize a Backend (Node.js) Project

The command used to initialize a Node.js backend project is:

npm init

---

### Explain what npm init and npm init -y do

#### npm init
- It initializes the project in interactive mode.
- It asks the user for details like project name, version, description, and author.
- Based on the input, it creates a customized `package.json` file.

#### npm init -y
- It initializes the project without asking any questions.
- It automatically creates a `package.json` file with default values.
- It is used for quick project setup.

---
## d. Files and Folders Created After Project Initialization

### package.json
- It is the main configuration file of a Node.js project.
- It contains important information such as project name, version, and description.
- It lists all project dependencies and scripts.
- It helps manage and run the backend application.

---

### node_modules
- This folder contains all the installed packages and dependencies.
- It is created automatically when `npm install` is executed.
- It can be very large in size and depends on the installed libraries.

---

### package-lock.json
- It stores the exact versions of installed dependencies.
- It ensures the same dependencies are installed on different systems.
- It helps avoid version conflicts and improves project stability.

---

## GitHub File Management

### Files/Folders That Should NOT Be Pushed to GitHub
- `node_modules/`

**Reason:**
- It is large in size.
- It can be recreated using the `npm install` command.
- Pushing it makes the repository heavy and inefficient.

---

### Files That MUST Be Committed to GitHub
- `package.json`
- `package-lock.json`

**Reason:**
- They define project dependencies.
- They help recreate the project environment.
- They ensure consistency across different systems.



