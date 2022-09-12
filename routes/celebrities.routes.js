const router = require("express").Router();

const { Router } = require("express");

const Celebrity = require("../models/Celebrity.model.js");

Router.post("/celebrities", async (req, res, next) => {
  const bbCelebrity = req.body;

  try {
    const createdCelebrity = await Celebrity.create({
      name: bbCelebrity.name,
      occupation: bbCelebrity.occupation,
      catchPhrase: bbCelebrity.catchPhrase,
    });
    res.status(200).json(createdCelebrity);
  } catch (e) {
    res.status(400).json("BAD REQUEST");
  }
});

module.exports = router;
