const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const Users = db.define("users", {
      id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
      },
      firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "first_name",
      },
      lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: "last_name",
      },
      email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                  isEmail: true,
            },
      },
      password: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      phone: {
            type: DataTypes.STRING, // +52
            allowNull: false,
            unique: true,
      },
      profileImage: {
            type: DataTypes.STRING,
            allowNull: true,
            field: "profile_image",
      },
      role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "normal",
      },
});

module.exports = Users;
