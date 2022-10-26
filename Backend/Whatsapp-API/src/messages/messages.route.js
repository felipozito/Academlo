const router = require("express").Router();
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const messagesServices = require("./messages.services");

// router.route("/:conversation_id/messages")
//       .get(passport.authenticate("jwt", { session: false }), messagesServices.getAllMessages)
//       .post(passport.authenticate("jwt", { session: false }), messagesServices.postMessage);

module.exports = router;
