const db = require("../utils/database");
const Conversation = require("./conversations.models");
const Users = require("./users.models");

const { DataTypes } = require("sequelize");

const Participants = db.define("participants", {
      id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
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
      userId: {
            type: DataTypes.UUID,
            allowNull: false,
            field: "user_id",
            references: {
                  model: Users,
                  key: "id",
            },
      },
});

module.exports = Participants;
