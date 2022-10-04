const router = require("express").Router();

const todoServices = require("./todo.services");

router.get("/todos", todoServices.getTodos);

router.post("/todos", todoServices.createNewTodo);

router.get("/todos/:id", todoServices.getOneTodo);

module.exports = router;
