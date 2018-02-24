import axios from "axios";

export default {
  // Gets all 
  getArticles: function(query) {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  searchArticles: function(query) {
    return axios.get(`/api/articles/search/${query.query}`);
  },
  getArticle: function(book){
    return axios.get(`/api/articles/${book.title}`)
  }

};
