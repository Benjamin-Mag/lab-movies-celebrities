const router = require("express").Router();
const { Router } = require("express");
const celebrities = require("../routes/celebrities.routes.js");
const movies = require("../routes/movies.routes.js");

/* GET /

This is a health check. It allows us to see that the API is running.
*/
router.get("/", (req, res, next) =>
  res.json({ success: true, name: "lab-movies-celebrities" })
);

router.use("/movies", movies);
router.use("/celebrities", celebrities);

module.exports = router;
