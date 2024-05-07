//connect mongoDB and node 

//import mongoose
const mongoose=require('mongoose')

//add a connection from dotenv file
const DB=process.env.DATABASE

//connection code
mongoose.connect(DB).then(()=>{
    console.log('Data Base connection established')
}).catch((error)=>{
    console.log('err')
})