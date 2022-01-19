const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");
const upload = require("../util/post-article-helper").upload;

router.get("/", articleController.getAriticles);

router.get("/add-article", articleController.getAddArticle);

router.get("/articles/:articleId", articleController.getArticleById);

router.get("/edit-article/:articleId", articleController.getEditArticle);

router.post(
  "/add-article",
  upload.single("image"),
  articleController.postAddArticle
);

router.post("/edit-article", articleController.postEditArticle);

router.post("/delete-article", articleController.deleteArticle);

module.exports = router;
