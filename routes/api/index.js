const router = require("express").Router();
const articleRoutes = require("./articles");

// Article Routes
router.use("/articles", articleRoutes);
// USe for all the saved Articles
router.use("/savedArticles", articleRoutes)

module.exports = router;
