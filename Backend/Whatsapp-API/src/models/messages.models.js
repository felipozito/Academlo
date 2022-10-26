const db = require("../utils/database");
const Users = require("./users.models");
const Conversation = require("./conversations.models");

const { DataTypes } = require("sequelize");

const Messages = db.define("messages", {
      id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
      },
      senderId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "sender_id",
            references: {
                  model: Users,
                  key: "id",
            },
      },
      conversationId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "conversation_id",
            references: {
                  model: Conversation,
                  key: "id",
            },
      },
      message: {
            type: DataTypes.TEXT,
            allowNull: false,
      },
});

module.exports = Messages;
