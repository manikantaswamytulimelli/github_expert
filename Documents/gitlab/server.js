const express = require("express")

const app = express()

function lw(req, res){
	res.send("welcome to web")
	console.log ("client connected")
}

app.get("/data",lw)
app.listen(3000)
