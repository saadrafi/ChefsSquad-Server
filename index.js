const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const recipes = require("./data/recipes.json");
const chefs = require("./data/chef's.json");

app.use(cors());

app.get("/chefs", (req, res) => {
  res.json(chefs);
});

app.get("/trending", (req, res) => {
  const treanding = recipes.filter((recipe) => recipe.is_treanding === true);
  res.json(treanding);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
