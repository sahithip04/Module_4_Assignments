# Q1. Node.js Architecture

Node.js is designed to run JavaScript outside the browser and handle many tasks efficiently at the same time. Instead of creating a new thread for every task, Node.js uses an event-driven and non-blocking approach, which makes it fast and scalable.

---

## Q1.a JavaScript Engine (V8)

- V8 is the JavaScript engine created by Google.
- It is the part that actually understands and runs JavaScript code.
- V8 converts JavaScript into machine-level code, which makes execution faster.
- Node.js uses V8 so JavaScript can be executed directly on the server without a browser.

---

## Q1.b Node.js Core APIs

- Node.js Core APIs are built-in modules that come with Node.js.
- Examples include `fs` for file handling, `http` for creating servers, and `timers` for scheduling tasks.
- These APIs allow JavaScript to interact with system resources.
- Internally, many core APIs use native code to work efficiently with the operating system.

---

## Q1.c Native Bindings

- JavaScript alone cannot directly access operating system features.
- Native bindings act as a connection between JavaScript and C/C++ code.
- They allow Node.js Core APIs to communicate with the OS.
- This is how Node.js performs tasks like file access and networking efficiently.

---

## Q1.d Event Loop

- The event loop is the core mechanism that handles asynchronous operations in Node.js.
- It keeps checking for completed tasks and executes their callbacks.
- Even though Node.js runs JavaScript in a single main thread, the event loop allows it to manage multiple tasks without blocking.
- This makes Node.js suitable for applications that need to handle many users at once.

---

## Q2. libuv

### Q1.a What is libuv?

- libuv is a library written in C that Node.js uses internally.
- It provides support for asynchronous and non-blocking operations.
- The event loop in Node.js is implemented using libuv.

---

### Q1.b Why Node.js needs libuv

- Different operating systems handle asynchronous operations differently.
- libuv provides a common interface so Node.js behaves the same on all platforms.
- It helps Node.js perform non-blocking I/O operations smoothly.

---

### Q1.c Responsibilities of libuv

- Managing the event loop
- Handling asynchronous input/output operations
- Managing the internal thread pool
- Providing cross-platform compatibility

---

# Q3. Thread Pool

### Q3.a What is a thread pool?

- A thread pool is a group of background threads.
- These threads are used to handle tasks that would otherwise block the main thread.
- They work behind the scenes without affecting JavaScript execution.

---

### Q3.b Why Node.js uses a thread pool

- Some operations cannot be handled asynchronously by the operating system.
- If these operations ran on the main thread, they would block execution.
- The thread pool helps Node.js stay non-blocking and responsive.

---

### Q3.c Operations handled by the thread pool

- File system operations
- Cryptographic tasks
- DNS lookups
- Compression-related operations

---

# Q4. Worker Threads

### Q4.a What are worker threads?

- Worker threads allow JavaScript code to run in parallel.
- Each worker thread has its own event loop and memory space.
- They are mainly used for tasks that require heavy computation.

---

### Q4.b Why are worker threads needed?

- CPU-intensive tasks can slow down the main thread.
- Worker threads move such tasks away from the main thread.
- This improves performance and keeps the application responsive.

---

### Q4.c Difference between thread pool and worker threads

- Thread pool threads are managed internally by libuv.
- Worker threads are created and managed by the developer.
- Thread pool handles blocking system-level tasks.
- Worker threads handle CPU-intensive JavaScript logic.

---

# Q5. Event Loop Queues

## Q5.a Macro Task Queue

- This queue contains tasks such as:
  - `setTimeout`
  - `setInterval`
  - `setImmediate`
  - I/O callbacks
- These tasks are executed in different iterations of the event loop.

---

## Q5.b Micro Task Queue

- This queue contains tasks such as:
  - `Promise.then`
  - `process.nextTick`
- These tasks are executed immediately after the current operation finishes.

---

## Q5.c Execution priority between queues

- The Micro Task Queue has higher priority than the Macro Task Queue.
- All microtasks are executed before moving to the next macro task.
- This ensures that promise-related callbacks are handled as soon as possible.
