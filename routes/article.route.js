const express = require("express");
const router = express.Router();
const multer = require("multer");

const articleController = require("../controllers/article.controller");
// const upload = require("../util/post-article-helper").upload;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  console.log(file);
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

router.get("/", articleController.getAriticles);

router.get("/add-article", articleController.getAddArticle);

router.post(
  "/add-article",
  upload.single("image"),
  articleController.postAddArticle
);

module.exports = router;
