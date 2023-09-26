const express = require("express")
const check = require("./check")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let initialRecipe = [
  {
    name: 'Spaghetti Carbonara',
    description: 'A classic Italian pasta dish.',
    preparationTime: '15 minutes',
    cookingTime: '15',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
    country: "India",
    veg: true,
    id: 1
  
  }
]

app.get("/get",(req,res)=>{
    res.status(200).sendFile(__dirname+"/index.html")
})

app.post("/post",check,(req,res)=>{
  let data = {name: req.body.name, grid: req.body.grid, course: req.body.course}
  res.status(200).send(data)
})



// ### GET Route
app.get("/", (req, res) => {
  res.status(200).send("welcome to the recipe api.")
})

// ### Recipe Listing - Not Done
app.get("/recipe/all", (req, res) => {
  res.status(200).send(initialRecipe)
})

app.get("/index",(req,res)=>{
  res.status(200).sendFile(__dirname+"/index.html")
})

// ### Recipe Form

app.get("/add",(req,res)=>{
  res.status(200).sendFile(__dirname+"/recipe.html")
})

app.post("/add",check,(req,res)=>{
  let data = {name: req.body.name, description: req.body.description, preparationTime: req.body.preparationTime, cookingTime: req.body.cookingTime, imageUrl: req.body.imageUrl, country: req.body.country, veg: req.body.veg}
  res.status(200).send(data)
})

// ### POST Route

// ### Middleware

// ### PATCH Route

app.patch("/recipe/update/:id",(req,res)=>{
  let {id} = req.params
  console.log(id);
  let updatedRecipe = initialRecipe.filter(todo=>todo.id == id)
  console.log(updatedRecipe);
  updatedRecipe[0].name=req.body.name
  updatedRecipe[0].description=req.body.description
  updatedRecipe[0].preparationTime=req.body.preparationTime
  updatedRecipe[0].cookingTime=req.body.cookingTime
  updatedRecipe[0].imageUrl=req.body.imageUrl
  updatedRecipe[0].country=req.body.country
  updatedRecipe[0].country=req.body.country
  res.status(200).send(...updatedRecipe)
})

// ### DELETE Route

app.delete("/recipe/delete/:id",(req,res)=>{
  let {id} = req.params
  let index = initialTodo.findIndex(todo=>todo.id == id)
  let deletedRecipe = initialRecipe.splice(index,1)[0]
  res.status(200).send({deletedRecipe, initialRecipe})
})

// ### Query Params Filter

app.get("/recipe/filter",(req,res)=>{
  let {veg}=req.query
  let data = initialRecipe.find({veg:veg})
  res.status(200).send(data)
})

app.listen(8090, () => {
  console.log("Server Started 8090");
})