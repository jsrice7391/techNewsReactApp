const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/books"
router.route("/")
  .get(articlesController.getAll)
  .post(articlesController.saveArticle)

// Matches with "/api/books/:id"
router.route("/search/:query")
.get(articlesController.searchArticles);

router.route("/saved")
.get(articlesController.getSaved)


module.exports = router;
