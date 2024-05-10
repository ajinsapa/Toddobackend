
const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

// Define Project schema
const projectSchema=new mongoose.Schema({

    title: {
        type: String,
        required: true
      },
      created_date: {
        type: Date,
        default: Date.now
      }
        
    })


// Define Project model
const Project=mongoose.model('Project',projectSchema)






// Export models
module.exports=Project;



