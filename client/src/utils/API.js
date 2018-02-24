import axios from "axios";

export default {
  // Gets all 
  getArticles: (query) => {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  searchArticles: (query)  => {
    return axios.get(`/api/articles/search/${query.query}`);
  },
  getArticle: (article) => {
    return axios.get(`/api/articles/${article.title}`)
  },
  saveTheArticle: article => {
    return axios.post("/api/articles" , article)
  }

};
