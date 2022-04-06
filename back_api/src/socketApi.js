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
            console.log(result)
            let id

            try{
                id = new ObjectId(result.id)
            } catch (e){
                return
            }
                await collection.updateOne({"_id":id},{$set:{status:result.status,timestamp:new Date()}})
                const employees = await collection.find().toArray()
                socket.emit("send",employees)
                socket.broadcast.emit("send",employees)
        })
    });
}