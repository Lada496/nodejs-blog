const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },
  dislikes: {
    type: Number,
    required: true,
  },
  comments: {
    comments: [
      {
        name: {
          type: String,
          require: true,
        },

        comment: {
          type: String,
          require: true,
        },
        date: {
          type: String,
          require: true,
        },
      },
    ],
  },
});
module.exports = mongoose.model("Article", articleSchema);
