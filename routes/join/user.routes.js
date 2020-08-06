const express = require('express');
const router = express.Router();
const user = require('../../controllers/user.controller');

// router.post("/joinuser", user.join);
router.post("/user/join", user.create);
router.get("/user/join/:userId", user.findById);

module.exports = router;