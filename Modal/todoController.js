const { default: mongoose } = require("mongoose");
const Schema = mongoose.Schema;

   // Define Project schema
   const todoSchema=new mongoose.Schema({

    project_id: {
        type: Schema.Types.ObjectId,
        ref: 'Project' // Refers to the 'Project' collection
      },
      tName: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['pending', 'completed'],
        required: true
      },
      created_date: {
        type: Date,
        default: Date.now
      },
      updated_date: {
        type: Date,
        required: true
       
      }
    })

    // Define Todo model
const Todo=mongoose.model('Todo', todoSchema);

// Export models
module.exports=Todo
