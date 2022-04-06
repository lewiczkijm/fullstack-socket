const { Server } = require("socket.io");


module.exports = function (server,db){
    const collection = db.collection("employees")
    const io = new Server(server);

    const sendEmployees = async (socket)=>{
        const employees = await collection.find().toArray()
        socket.emit("send",employees)
    }

    io.on('connection', async (socket) => {
        console.log('Socket connected');
        sendEmployees(socket)
        socket.on("change",async socket=>{
            sendEmployees(socket)
        })
    });
}