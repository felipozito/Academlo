const { getAllUsers, getUserByID, createUser } = require("./user.controllers");

const getUsers = (req, res) => {
      const data = getAllUsers();
      res.status(200).json(data);
};

const getOneUser = (req, res) => {
      const id = req.params.id;
      const data = getUserByID(id);
      if (data) {
            res.status(200).json(data);
      } else {
            res.status(404).json({ message: `this user doesn't exist` });
      }
};

const createNewUser = (req, res) => {
      const { first_name, last_name, email, password, birthday } = req.body;
      const user = {
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            birthday: birthday,
      };
      if (first_name && last_name && email && password && birthday) {
            const data = createUser(user);
            res.status(200).json(data);
      } else {
            res.status(400).json({ message: "missind data" });
      }
      res.status(200).json({ messages: "user", user });
};

module.exports = {
      getUsers,
      getOneUser,
      createNewUser,
};
