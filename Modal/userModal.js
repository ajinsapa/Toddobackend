const { default: mongoose } = require("mongoose");

const useSchema=new mongoose.Schema({

userName:{
    type:String,
    required:true,

},
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
}


    
})

//model create

const users=mongoose.model('users',useSchema)

//export

module.exports=users