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

// app.get("/get",(req,res)=>{
//     res.status(200).sendFile(__dirname+"/index.html")
// })

// app.post("/post",check,(req,res)=>{
//   let data = {name: req.body.name, grid: req.body.grid, course: req.body.course}
//   res.status(200).send(data)
// })



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

app.post("/recipe/add",check,(req,res)=>{
  let newrecipe = {
    name: req.body.name,
    description: req.body.description,
    preparationTime: req.body.preparationTime + ` minutes`,
    cookingTime: req.body.cookingTime,
    imageUrl: req.body.imageUrl,
    country: req.body.country,
    veg: req.body.veg,
    id: initialRecipe.length + 1,
}
initialRecipe.push(newrecipe)
res.send(initialRecipe)
})

// ### POST Route

// ### Middleware

// ### PATCH Route

app.patch("/recipe/update/:id",(req,res)=>{
  let {id} = req.params
  console.log(id);
  let updatedRecipe = initialRecipe.filter(recipe=>recipe.id == id)
  console.log(updatedRecipe);
  updatedRecipe[0].name=req.body.name
  updatedRecipe[0].description=req.body.description
  updatedRecipe[0].preparationTime=req.body.preparationTime
  updatedRecipe[0].cookingTime=req.body.cookingTime
  updatedRecipe[0].imageUrl=req.body.imageUrl
  updatedRecipe[0].country=req.body.country
  updatedRecipe[0].veg=req.body.veg
  res.status(200).send(initialRecipe)
})

// ### DELETE Route

app.delete("/recipe/delete/:id",(req,res)=>{
  let {id} = req.params
  let index = initialRecipe.findIndex(recipe=>recipe.id == id)
  let deletedRecipe = initialRecipe.splice(index,1)[0]
  res.status(200).send(initialRecipe)
})


// ### Query Params Filter

app.get("/recipe/filter",(req,res)=>{
  let { veg, sort, country } = req.query

    if (veg === 'true' || veg === 'false') {
        newrecipe = initialRecipe.filter(recipe => recipe.veg === (veg === 'true'))
        res.send(newrecipe)
    }
    else if (sort === 'lth') {
        newrecipe = initialRecipe.sort((a, b) => a.cookingTime - b.cookingTime)
        res.send(newrecipe)
    }
    else if (sort === 'htl') {
        newrecipe = initialRecipe.sort((a, b) => b.cookingTime - a.cookingTime)
        res.send(newrecipe)
    }
    else if(country){
        newrecipe = initialRecipe.filter(e => e.country.toLocaleLowerCase() === country.toLocaleLowerCase())
        res.send(newrecipe)
    }
    else{
        res.status(404).send("wrong")
    }
})

app.listen(8090, () => {
  console.log("Server Started 8090");
})