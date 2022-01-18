const Article = require("../models/article.model");

exports.getAriticles = (req, res, next) => {
  res.render("article/article-list", {
    pageTitle: "Home - All Articles",
  });
};
exports.getAddArticle = (req, res, next) => {
  res.render("article/add-article", {
    pageTitle: "Add Article",
  });
};

exports.postAddArticle = async (req, res, next) => {
  console.log(req.file);
  const { title, image, body } = req.body;
  if (req.file) {
    console.log(req.file.path);
  }
  res.redirect("/");
};
