const express = require("express");
const router = express.Router();
const postController = require("../controllers/post");

router.get("/", postController.fetchAllPosts);

module.exports = router;
