const express = require("express")
const morgan = require("morgan")
const bodyParser = require('body-parser')


const mongodb = require("./connection")

const app = express()
const PORT = process.env.PORT || 8080

mongodb.connect()

// parse application/json
app.use(bodyParser.json())

app.use(morgan('combined'))

app.get("/",(req,res)=>res.send("Hello"))
app.get("/clients",
	(req,res)=>res.send(clients)
	)
// login


app.listen(PORT,console.log("Started on " + PORT))