const express = require("express")
const router = express.Router()
// router.use(function (req, res, next) {
//     next();
// });


//  rest api operations with db
function restApi(db){
    const collection = db.collection("employees")

    // Login function: get name, send objectId
    router.post("/login",async (req,res)=>{
        if(!req.body.name) res.status(500).send("Name didn't get")
        const employee = await collection.findOne({name:req.body.name})
        if(employee === null) res.status(404).send("Employee not found")
        res.send(employee._id)
    })
    return router
}

module.exports = restApi