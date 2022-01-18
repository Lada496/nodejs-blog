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
