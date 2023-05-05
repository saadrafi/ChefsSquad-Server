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

app.get("/chefs/:chefId",(req,res)=>{
  const chefId = req.params.chefId;
  const chef = chefs.find((chef) => chef.chef_id == chefId);
  res.json(chef);
})

app.get("/trending", (req, res) => {
  const treanding = recipes.filter((recipe) => recipe.is_treanding === true);
  res.json(treanding);
});

app.get("/chefrecipe/:chefId", (req, res) => {
  const chefId = req.params.chefId;
  const chefRecipes = recipes.filter((recipe) => recipe.chef_id == chefId);
  res.json(chefRecipes);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
