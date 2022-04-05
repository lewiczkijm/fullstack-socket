const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')


const mongodb = require("./connection")
const router = require("./restapi");

const PORT = process.env.PORT || 8080

async function connect(){
	const app = express()
	app.use(bodyParser.json())
	app.use(morgan('combined'))

	const db = await mongodb.connect()

	app.use("/",router(db))

	app.listen(PORT,console.log("Started on " + PORT))
}

connect()