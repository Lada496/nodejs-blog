const Article = require("../models/article.model");
const getById = (articleId) => {
  return Article.findById(articleId, (err, data) => {
    if (err) console.log(err);
    return data;
  }).clone();
};
exports.getAriticles = (req, res, next) => {
  Article.find((err, data) => {
    if (err) console.log(err);

    res.render("article/article-list", {
      pageTitle: "Home - All Articles",
      articles: data,
      lorem:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Pariatur, voluptas officiis tenetur a dolore id harum enim reiciendis illum deserunt, non ea impedit. Vel fuga tenetur,maxime error quas corporis!",
    });
  });
};
exports.getAddArticle = (req, res, next) => {
  res.render("article/add-edit-article", {
    pageTitle: "Add Article",
    editing: false,
  });
};

exports.getArticleById = async (req, res, next) => {
  const {
    params: { articleId },
  } = req;
  const article = await getById(articleId);
  res.render("article/article-detail", {
    pageTitle: article.title,
    article: article,
  });
};

exports.postAddArticle = async (req, res, next) => {
  const { title, body } = req.body;
  const imageUrl = `images/${req.file.filename}` || "images/no-image.png";
  const likes = 0;
  const article = new Article({ title, imageUrl, body, likes });
  await article.save();
  res.redirect("/");
};

exports.getEditArticle = async (req, res, next) => {
  const editMode = req.query.edit;
  const {
    params: { articleId },
  } = req;
  const article = await getById(articleId);

  res.render("article/add-edit-article", {
    pageTitle: "Edit Article",
    editing: editMode,
    article: article,
  });
};

exports.postEditArticle = async (req, res, next) => {
  const { title, body } = req.body;
  console.log(req);
  const {
    params: { articleId },
  } = req;
  const article = await getById(articleId);

  article.title = title;
  article.body = body;

  // if (req.file) {
  //   const imageUrl = `images/${req.file.filename}`;
  //   fs.unlink(req.file.path, (err) => {
  //     if (err) console.log(err);
  //     console.log("Inception");
  //   });
  //   article.imageUrl = imageUrl;
  // }
  await article.save();
  res.redirect("/");
};
