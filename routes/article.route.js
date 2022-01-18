const express = require("express");
const router = express.Router();

const articleController = require("../controllers/article.controller");

router.get("/", articleController.getAriticles);

router.get("/add-article", articleController.getAddArticle);

module.exports = router;
