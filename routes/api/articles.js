const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  // The getALL route ill pull the most recent articles from wired
  .get(articlesController.getAll)
  // Will save the users article of choice to the MongoDB
  .post(articlesController.saveArticle)

// Matches with "/api/search
router.route("/search/")
// ALlows all of the search functionality
.get(articlesController.searchArticles);

router.route("/saved")
// Finds all of the saved articles and displays them to the user on a separaste "Saved" page
.get(articlesController.getSaved)


module.exports = router;
