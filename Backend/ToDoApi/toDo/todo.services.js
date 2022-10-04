const { getAllTodos, getTodoById, createTodo } = require("./todos.controllers");

const getTodos = (req, res) => {
      const data = getAllTodos();
      res.status(200).json(data);
};

const getOneTodo = (req, res) => {
      const id = req.params.id;
      const data = getTodoById(id);
      if (data) {
            res.status(200).json(data);
      } else {
            res.status(404).json({ message: `this user doesn't exist` });
      }
};

const createNewTodo = (req, res) => {
      const { title, pedro } = req.body;
      const aux = {
            title: title,
            pedro: pedro,
      };
      if (title) {
            const data = createTodo(title);
            res.status(201).json(aux);
      } else {
            res.status(400).json({ message: "missind data" });
      }
};

module.exports = {
      getTodos,
      getOneTodo,
      createNewTodo,
};
