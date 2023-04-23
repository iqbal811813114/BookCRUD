const express= require('express')
const app= express()
const bookRoute= require('./routes/booksroute')
const cors= require('cors')
require("./connection/con")
app.use(cors())
app.use(express.json())
app.use('/api/v1',bookRoute)
app.get('/',(req,res) =>{
	res.send("hello")
})
app.listen(5000,()=>{
	console.log("Server Running")
})