const uuid = require("uuid");
// const Users = require("../models/users.models");
// const Categories = require("../models/categories.models")
const Conversation = require("../models/conversations.models");

const getAllConversations = async () => {
      const data = await Conversation.findAll({
            attributes: {
                  exclude: ["createdAt", "updatedAt"],
            },
      });
      return data;
};
const getConversationById = async (id) => {
      const data = await Conversation.findOne({
            where: {
                  id,
            },
      });
      return data;
};

const createConversation = async (data) => {
      const response = await Conversation.create({
            id: uuid.v4(),
            title: data.title,
            imageURL: data.imageURL,
            createdBy: data.createdBy, //? este es el user id que viene desde el token
      });
      return response;
};

const editConversation = async (id, data) => {
      const response = await Conversation.update(data, {
            where: {
                  id: id,
            },
      });
      return response;
};

const deleteConversation = async (id) => {
      const data = await Conversation.destroy({
            where: {
                  id: id,
            },
      });
      return data;
};
module.exports = {
      getAllConversations,
      getConversationById,
      createConversation,
      editConversation,
      deleteConversation,
};
