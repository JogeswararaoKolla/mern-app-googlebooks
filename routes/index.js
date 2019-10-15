const router = require("express").Router();
const bookRoutes = require("./bookRoutes.js");

//Book Routes

router.use("/api/books/", bookRoutes);

module.exports = router;
