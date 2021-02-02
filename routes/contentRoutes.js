const router = require("express").Router();
const contentController = require("../controllers/contentController");


router.route("/")
  .get(contentController.findAll)
  .post(contentController.create)
  .put(contentController.update)
  .delete(contentController.remove);

router
  .route("/:id")
  .get(contentController.findById)
  .put(contentController.update)
  .delete(contentController.remove);

  
module.exports = router;
