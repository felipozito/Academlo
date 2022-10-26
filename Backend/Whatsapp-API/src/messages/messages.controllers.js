const Message = require("../models/messages.models");
const uuid = require("uuid");

const getAllMessages = async () => {
      const data = await Message.findAll();
      return data;
};

const getMessageById = async (id) => {
      const data = await Message.findOne({
            where: {
                  id,
            },
      });
      return data;
};

const createMessage = async (data) => {
      const response = await Message.create({
            id: uuid.v4(),
            senderId: data.senderId,
            message: data.message,
            conversationId: data.conversationId, //? este es el user id que viene desde el token
      });
      return response;
};
const deleteMessage = async (id) => {
      const data = await Message.destroy({
            where: {
                  id: id,
            },
      });
      return data;
};

module.exports = {
      createMessage,
      getAllMessages,
      getMessageById,
      deleteMessage,
};
