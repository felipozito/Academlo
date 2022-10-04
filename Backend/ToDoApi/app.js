const express = require("express");
const app = express();
const todoRouter = require("./toDo/todos.router");
app.use(express.json());

app.get("/", (req, res) => {
      res.status(200).json({ message: "Server Ok" });
});

app.use("/", todoRouter);

app.listen(8000, () => {
      console.log("Server started at port 8000");
});
