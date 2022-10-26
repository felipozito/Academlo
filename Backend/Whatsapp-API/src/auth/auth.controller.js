//* Email y Contraseña del usuario

const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");
//? El email es unico en mi base de datos

const loginUser = async (email, password) => {
      try {
            const user = await getUserByEmail(email);

            const verifyPassword = comparePassword(password, user.password);
            if (verifyPassword) {
                  return user;
            }
            return false;
      } catch (err) {
            console.log(err);
            return false;
      }
};

module.exports = {
      loginUser,
};
