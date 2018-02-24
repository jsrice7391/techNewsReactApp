const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.getAll)

// Matches with "/api/books/:id"
router.route("/search/:query")
.get(articlesController.searchArticles);



module.exports = router;
