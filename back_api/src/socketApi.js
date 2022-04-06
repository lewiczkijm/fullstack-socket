const { Server } = require("socket.io");
const {ObjectId} = require("mongodb")


module.exports = function (server,db){
    const collection = db.collection("employees")
    const io = new Server(server);


    io.on('connection', async (socket) => {
        console.log('Socket connected');
        const employees = await collection.find().toArray()
        socket.emit("send",employees)
        socket.on("update",async result=>{
            let id

            try{
                id = new ObjectId(result.id)
                if(!["Working","Vacation","Sickness"].includes(result.status)) throw new TypeError("Wrong keyword")
            } catch (e){
                console.log("socket request error")
                socket.emit("error",{message:"Server error! Bed request"})
                return
            }
                const status = await collection.updateOne({"_id":id},{$set:{status:result.status,timestamp:new Date()}})
                if(status.modifiedCount !== 1){
                    console.log("socket request error")
                    socket.emit("error",{message:"Server error! Bed request"})
                    return
                }
                const employees = await collection.find().toArray()
                socket.emit("send",employees)
                socket.broadcast.emit("send",employees)
        })
    });
}