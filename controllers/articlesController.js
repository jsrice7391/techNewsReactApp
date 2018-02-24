const db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("8a750ca755344167bc568d29cfe2653d");
const request = require("request");





// Defining methods for the booksController
module.exports = {
  // Gets all of the mos trecent artifcles. I will do this On the load of the document
  getAll: (req, res) => {
    newsapi.v2
      .topHeadlines({ sources: "wired" })
      .then(response => {
        res.json(response)
      });
  },
  searchArticles: (req, res)=>{
    newsapi.v2.everything({
      q: req.params.query,
      sources: "wired",
      from: "2018-02-23",
      to: "2018-02-01"
    }).then(response => {
      res.json(response);
    })
  },
  saveArticle: (req,res) => {
    db.Article.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
