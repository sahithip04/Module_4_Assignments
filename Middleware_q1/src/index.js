const express = require("express");
const todoRouter = require("./routes/todos.routes");
const loggerMiddleware = require("./middleware/logger.middleware");

const app = express();
const PORT = 3000;

app.use(express.json());        // body parser
app.use(loggerMiddleware);      // app-level middleware

app.use("/todos", todoRouter);  // router

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
});
