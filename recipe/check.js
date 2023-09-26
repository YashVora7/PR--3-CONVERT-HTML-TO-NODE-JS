const check = (req,res,next) =>{
    let {name,description,preparationTime,cookingTime,imageUrl,country,veg} = req.body
    if(name&&description&&preparationTime&&cookingTime&&imageUrl&&country&&veg){
        next()
    }
    else{
        res.status(404).send("All fields are required")
    }
}

module.exports = check