import axios from "axios";

export default {
  // Gets all 
  getArticles: (query) => {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  searchArticles: (query)  => {
    console.log(query)
    return axios.get(`/api/articles/search/`, {
      params: {
        query: query.query,
        source: query.source,
        startDate: query.startDate,
        endDate: query.endDate
      }
    });
  },
  // Will allos the user to see the saved articles
  getArticle: (article) => {
    return axios.get(`/api/savedArticles/`)
  },
  saveTheArticle: article => {
    return axios.post("/api/articles" , article)
  },
  getSaved: () => {
    return axios.get("/api/savedArticles/saved")
  }

};
