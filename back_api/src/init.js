const mongodb = require("./connection")
// Working, Vacation, Sickness
const employees = [
	{name:"Dekel",status:"Working",timestamp:new Date("2021-11-22")},
	{name:"Alexandro",status:"Working",timestamp:new Date("2021-12-10")},
	{name:"David",status:"Vacation",timestamp:new Date("2022-02-11")},
	{name:"David",status:"Sickness",timestamp:new Date("2022-03-30")}
]


async function init(){
	const db = await mongodb.connect()
	const collection = await db.collection("employees")
	await collection.insertMany(employees)
	mongodb.close()
}

init()