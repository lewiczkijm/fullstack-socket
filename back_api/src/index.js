const express = require("express")
const morgan = require("morgan")

const mongodb = require("./connection")

const app = express()
const PORT = 8080
mongodb.connect()

app.use(morgan('combined'))

app.get("/",(req,res)=>res.send("Hello"))
app.get("/clients",
	(req,res)=>res.send(clients)
	)
app.listen(PORT,console.log("Started on " + PORT))