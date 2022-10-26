const messagesController = require(".//messages.controllers");
const conversationControllers = require("../conversations/conversations.controlles");

const getAllMessages = (req, res) => {
      const id = req.params.conversation_id;
      conversationControllers
            .getConversationById(id)
            .then((data) => {
                  console.log(data);
                  if (data) {
                        messagesController
                              .getAllMessages()
                              .then((data) => {
                                    res.status(200).json(data);
                              })
                              .catch((err) => {
                                    res.status(400).json({ message: err.message });
                              });
                  } else {
                        res.status(400).json({ message: "this chat doesnt have messages" });
                  }
            })
            .catch((e) => {
                  res.status(400).json({ message: "this chat doesnt" });
            });
};

const getMessageById = (req, res) => {
      const id = req.params.message_id;
      const idConversation = req.params.conversation_id;
      conversationControllers
            .getConversationById(idConversation)
            .then((data) => {
                  console.log(data);
                  if (data) {
                        messagesController
                              .getMessageById(id)
                              .then((data) => {
                                    if (data) {
                                          res.status(200).json(data);
                                    } else {
                                          res.status(404).json({ message: "Invalid ID" });
                                    }
                              })
                              .catch((err) => {
                                    res.status(400).json({ message: err.message });
                              });
                  } else {
                        res.status(400).json({ message: "this chat doesnt exists" });
                  }
            })
            .catch((e) => {
                  res.status(400).json({ message: "this chat doesnt" });
            });
};

const postMessage = (req, res) => {
      const { message } = req.body;
      const senderId = req.user.id;
      const conversationId = req.params.conversation_id;

      conversationControllers
            .getConversationById(conversationId)
            .then((data) => {
                  if (data && message) {
                        messagesController
                              .createMessage({ message, senderId, conversationId })
                              .then((data) => {
                                    res.status(201).json(data);
                              })
                              .catch((err) => {
                                    res.status(400).json({ message: err.message });
                              });
                  } else {
                        res.status(400).json({ message: "doesnt have messages or chat" });
                  }
            })
            .catch((e) => {
                  res.status(400).json({ message: "this chat doesnt" });
            });
};

const deleteMessage = (req, res) => {
      const id = req.params.message_id;

      const conversation_id = req.params.conversation_id;
      conversationControllers
            .getConversationById(conversation_id)
            .then((data) => {
                  if (data) {
                        messagesController
                              .deleteMessage(id)
                              .then((response) => {
                                    if (response) {
                                          res.status(200).json({ message: "Completed Delete Message" });
                                    } else {
                                          res.status(400).json({ message: "Invalid ID" });
                                    }
                              })
                              .catch((err) => {
                                    res.status(400).json(err);
                              });
                  } else {
                        res.status(400).json({ message: "this chat doesnt have this messages" });
                  }
            })
            .catch((e) => {
                  res.status(400).json({ message: "this chat doesnt" });
            });
};

module.exports = {
      getAllMessages,
      getMessageById,
      postMessage,
      deleteMessage,
};
