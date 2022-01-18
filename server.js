require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const articleRoute = require("./routes/article.route");
const authRoute = require("./routes/auth.route");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(articleRoute);
app.use(authRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGODB_URL, () => {
  console.log("db connected");
  app.listen(PORT);
});
