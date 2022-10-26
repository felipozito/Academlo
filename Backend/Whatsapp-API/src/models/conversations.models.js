const db = require("../utils/database");
const Users = require("./users.models");

const { DataTypes } = require("sequelize");

const Conversation = db.define("conversation", {
      id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
      },
      title: {
            type: DataTypes.STRING,
            allowNull: false,
      },
      imageURL: {
            type: DataTypes.STRING,
            allowNull: true,
            field: "image_url",
      },
      createdBy: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "created_by",
            references: {
                  model: Users,
                  key: "id",
            },
      },
});

module.exports = Conversation;
