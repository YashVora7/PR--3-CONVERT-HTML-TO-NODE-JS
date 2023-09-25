const check = (req,res,next) =>{
    let {name,grid,course} = req.body
    if(name&&grid&&course){
        next()
    }
    else{
        res.status(404).json({error:"missing data"})
    }
}

module.exports = check