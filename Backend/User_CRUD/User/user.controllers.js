const uuid = require("uuid");

let userDB = [
      {
            id: "4d0dbb9e-f96e-44c8-adf7-1141956a9f7a",
            first_name: "felipe",
            last_name: "asimbaya",
            email: "felipeasimbaya31@gmail.com",
            password: "1234",
            birthday: "1996/03/11",
      },
];

const getAllUsers = () => {
      return userDB;
};
const getUserByID = (id) => {
      const data = userDB.find((user) => user.id === id);
      return data;
};

const createUser = (user) => {
      const newUser = {
            id: uuid.v4(),
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            password: user.password,
            birthday: user.birthday,
      };
      userDB.push(newUser);
      return newUser;
};

module.exports = {
      getAllUsers,
      createUser,
      getUserByID,
};
