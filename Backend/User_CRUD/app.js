const { json } = require("express");
const express = require("express");
const app = express();
const userRouter = require("./User/user.router");
app.use(express.json());

app.get("/", (req, res) => {
      res.status(200).json({ messages: "server is OK" });
});

app.use("/", userRouter);

app.listen(8000, () => {
      console.log("Serves started on PORT 8000");
});
