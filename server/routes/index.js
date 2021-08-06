const router = require("express").Router();
const books = require("./bookRoutes");

//api/todo route
router.use("/api/books", books);

module.exports = router;
