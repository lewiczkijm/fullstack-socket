const http = require("http")
const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')


const mongodb = require("./connection")
const router = require("./restapi");
const socket = require("./socketApi")

const PORT = process.env.PORT || 8080

async function connect(){
	const app = express()
	app.use(bodyParser.json())
	app.use(morgan('combined'))

	const db = await mongodb.connect()

	app.use("/",router(db))
	const server = http.createServer(app)

	socket(server,db)
	server.listen(PORT)
}

connect()