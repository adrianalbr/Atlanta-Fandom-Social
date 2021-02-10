const router = require("express").Router();
const contentController = require("../controllers/contentController");

router
  .route("/")
  .get(contentController.findAll)
  .post(contentController.create)
  .put(contentController.update)
  .delete(contentController.remove);

router.route("/user").get(contentController.findByAuthor);

router.route("/savedPosts").get(contentController.fetchSavedPosts);

router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

module.exports = router;
