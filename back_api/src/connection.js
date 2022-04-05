const { MongoClient } = require("mongodb");

const URL =  process.env.MONGO_CONNECT || "mongodb://localhost:27017"
const db = process.env.MONGO_DB || "employees"
const client = new MongoClient(URL);

// Connection to mongo with credantials
async function connect() {
	console.log("start mongo connection")
	try{
		await client.connect();
		console.log("mongodb connected")
    	return client.db(db);
	} catch(e){
		console.log("mongodb connection error")
		process.exit(1)
	}

}

// close connection
async function close(){
	try{
		await client.close()
		console.log("mongodb is closed")
	} catch(e){
		console.log("mongodb disconnection error")
		process.exit(1)

	}
}
module.exports = {connect,close}