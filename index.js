
const  router = require('./Router/router')
//1 Automtically load dotenv file
require('dotenv').config()

//2 import express
const express=require('express')

//6 Import cors
const cors=require('cors')

//import connection.js
require('./connection')

//3 create a server application
const server=express()


//4 define routes
const PORT=5000

//7 use cors
server.use(cors())
server.use(express.json())

//5 Run application
server.listen(PORT,()=>{
    console.log('listing to port:'+PORT)
})

//8 define routes
server.get('/',(req,res)=>{
    res.status(200).json('Todo List server started')
})
//9 use router
server.use(router)