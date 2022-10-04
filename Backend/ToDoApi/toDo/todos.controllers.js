const uuid = require("uuid");

const todoDB = [
      {
            id: "a8885b11-0bfd-422e-9b1a-7dddf53ad05a",
            title: "prueba 1",
            is_completed: false,
      },
      {
            id: "4d77a0cb-fe58-42c6-bfa8-35d46e5463d0",
            title: "prueba 2",
            is_completed: false,
      },
];

const getAllTodos = () => {
      return todoDB;
};
const getTodoById = (id) => {
      const data = todoDB.find((todo) => todo.id === id);
      return data;
};

const createTodo = (title) => {
      const newTodo = {
            id: uuid.v4(),
            title,
            is_completed: false,
      };
      todoDB.push(newTodo);
      return newTodo;
};

module.exports = {
      getAllTodos,
      getTodoById,
      createTodo,
};
