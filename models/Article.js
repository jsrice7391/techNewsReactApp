const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title:{
    type: String,
    required:true
  },
  author:{
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  urlToImage:{
    type: String,
    required: true
  }
},{
  timestamps:{created_at:"created_at"}
});

const Article= mongoose.model("Book", articleSchema);

module.exports = Article;
