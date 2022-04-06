const express = require("express")
const router = express.Router()
const {ObjectId} = require("mongodb")


//  rest api operations with db
function restApi(db){
    const collection = db.collection("employees")

    // Login function: get name, send objectId
    router.post("/login",async (req,res)=>{

        if(!req.body.name) {
            res.status(500).send({message:"Name didn't get"})
            return
        }

        const employee = await collection.findOne({name:req.body.name})

        if(employee === null) {
            res.status(404).send({message:"Employee not found"})
            return
        }
        res.send(employee._id)
    })

    router.get("/user/:id",async (req,res)=>{
        let id

        try{
            id = new ObjectId(req.params.id)
        } catch (e){
            res.status(500).send({message:"Incorrect user id"})
            return
        }

        const employee = await collection.findOne({"_id":id})
        if(employee === null) {
            res.status(404).send({message:"Employee not found"})
            return
        }

        res.send(employee)
    })

    return router
}

module.exports = restApi