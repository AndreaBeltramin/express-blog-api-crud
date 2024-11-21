const express = require("express");
const router = express.Router();
const blogPosts = require("../data/blogPosts.js");
const postsController = require("../controllers/postsController.js");

// rotta index
router.get("/", postsController.index);

// rotta show
router.get("/:id", postsController.show);

// rotta store
router.post("/", postsController.store);

// rotta update
router.put("/:id", postsController.update);

// rotta modify
router.patch("/:id", postsController.modify);

// rotta destroy
router.delete("/:id", postsController.destroy);

module.exports = router;
