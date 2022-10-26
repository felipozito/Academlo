const conversationControllers = require("./conversations.controlles");

const getAllConversations = (req, res) => {
      conversationControllers
            .getAllConversations()
            .then((data) => {
                  res.status(200).json(data);
            })
            .catch((err) => {
                  res.status(400).json({ message: err.message });
            });
};

const createConversation = (req, res) => {
      const createdBy = req.user.id; //? Este es el id del usuario loggeado
      const { title, imageURL } = req.body;
      if (title && createdBy) {
            conversationControllers
                  .createConversation({ title, imageURL, createdBy })
                  .then((data) => {
                        res.status(201).json(data);
                  })
                  .catch((err) => {
                        res.status(400).json(err.message);
                  });
      } else {
            res.status(400).json({
                  message: "Missing Data",
                  fields: {
                        title: "string",
                        imageURL: "string",
                        userId: "uuid",
                  },
            });
      }
};

const getConversationById = (req, res) => {
      const id = req.params.conversation_id;
      conversationControllers
            .getConversationById(id)
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
};

const patchConversation = (req, res) => {
      const id = req.params.conversation_id;
      const { title, imageURL } = req.body;

      conversationControllers
            .editConversation(id, { title, imageURL })
            .then((response) => {
                  if (response[0]) {
                        res.status(200).json({
                              message: `Conversation with id: ${id}, edited succesfully!`,
                        });
                  } else {
                        res.status(400).json({ message: "Invalid ID" });
                  }
            })
            .catch((error) => {
                  res.status(400).json({ message: error.message });
            });
};

const deleteConversation = (req, res) => {
      const id = req.params.conversation_id;
      conversationControllers
            .deleteConversation(id)
            .then((response) => {
                  if (response) {
                        res.status(200).json({ message: "Completed Delete Conversation" });
                  } else {
                        res.status(400).json({ message: "Invalid ID" });
                  }
            })
            .catch((err) => {
                  res.status(400).json(err);
            });
};

module.exports = {
      createConversation,
      getAllConversations,
      getConversationById,
      patchConversation,
      deleteConversation,
};
