const router = require("express").Router();
const bookContoller = require("../controllers/bookController.js");

// Matches with "/api/books"
router
  .route("/")
  .get(bookContoller.findAll)
  .post(bookContoller.create);

router
  .route("/:id")
  .get(bookContoller.findById)
  .put(bookContoller.update)
  .delete(bookContoller.remove);

module.exports = router;
