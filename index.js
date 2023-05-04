const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const recipes=require("./data/recipes.json")
const chefs =require("./data/chef's.json")

app.use(cors());

app.get("/",(req,res)=>
{
  res.send("Hello World")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
