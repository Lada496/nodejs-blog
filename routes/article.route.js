const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");
const upload = require("../util/post-article-helper").upload;

router.get("/", articleController.getAriticles);

router.get("/add-article", articleController.getAddArticle);

router.post(
  "/add-article",
  upload.single("image"),
  articleController.postAddArticle
);

module.exports = router;
