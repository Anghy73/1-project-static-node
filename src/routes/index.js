const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/models", (req, res) => {
  res.render("models");
});

module.exports = router;
