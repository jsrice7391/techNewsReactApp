import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  articleSearch: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  saveArticles: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
