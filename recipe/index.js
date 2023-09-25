const express = require("express")
const check = require("./check")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

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

// app.get("/",(req,res)=>{
//     res.status(200).sendFile(__dirname+"/index.html")
// })

// ### GET Route
app.get("/",(req,res)=>{
    res.status(200).send("welcome to the recipe api.")
})

// ### Recipe Listing
app.get("/recipe/all",(req,res)=>{
    res.status(200).send("welcome to the recipe api.")
})

// ### Recipe Form

// ### POST Route

// ### Middleware

// ### PATCH Route

// ### DELETE Route

// ### Query Params Filter

app.listen(8090,()=>{
   console.log("Server Started 8090");
})