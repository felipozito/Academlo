const router = require("express").Router();
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const conversationServices = require("./conversation.services");
const messagesServices = require("../messages/messages.services");

router.route("/")
      .get(passport.authenticate("jwt", { session: false }), conversationServices.getAllConversations)
      .post(passport.authenticate("jwt", { session: false }), conversationServices.createConversation);
router.route("/:conversation_id")
      .get(passport.authenticate("jwt", { session: false }), conversationServices.getConversationById)
      .patch(passport.authenticate("jwt", { session: false }), conversationServices.patchConversation)
      .delete(passport.authenticate("jwt", { session: false }), conversationServices.deleteConversation);
router.route("/:conversation_id/messages")
      .get(passport.authenticate("jwt", { session: false }), messagesServices.getAllMessages)
      .post(passport.authenticate("jwt", { session: false }), messagesServices.postMessage);
router.route("/:conversation_id/messages/:message_id")
      .get(passport.authenticate("jwt", { session: false }), messagesServices.getMessageById)
      .delete(passport.authenticate("jwt", { session: false }), messagesServices.deleteMessage);

module.exports = router;
