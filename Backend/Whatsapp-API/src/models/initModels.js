const Users = require("./users.models");
const Messages = require("./messages.models");
const Participants = require("./participants.models");
const Conversation = require(".//conversations.models");

const initModels = () => {
      Users.hasMany(Conversation);
      Users.hasMany(Messages);
      Users.hasMany(Participants);
      Conversation.hasMany(Messages);
      Conversation.hasMany(Participants);
};

module.exports = initModels;
