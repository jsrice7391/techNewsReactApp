const db = require("../models");
const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("8a750ca755344167bc568d29cfe2653d");
const request = require("request");


const getAll = () => {
  newsapi.v2
    .topHeadlines({
      sources: "wired"
    })
    .then(response => {
      console.log(response);
    });
}


// Defining methods for the booksController
module.exports = {
  getAll: (req, res) => {
    getAll()
    res.send("Articles found")
  }

};
