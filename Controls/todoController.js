const TodoModel = require("../Modal/todoController");

//Logic to add todo
exports.addTodo = async (req, res) => {
  console.log("inside Api call to add todo");
  const { project_id, description, status, tName } = req.body;
  try {
    if (
      project_id === undefined ||
      description === undefined ||
      status === undefined ||
      tName === undefined
    ) {
      res.status(400).json({ message: "Feilds are missing" });
    } else {
      const newTodo = new TodoModel({
        project_id,
        description,
        status,
        tName,
        updated_date:Date.now()
      });
      await newTodo.save();
      res.status(200).json({ newTodo, message: "Todo Added Succesfully" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//Logic to get all todos
exports.getAllTodos = async (req, res) => {
  console.log("inside Api call to get all todo list");
  const { id } = req.params;
  console.log(id);
  try {
    const getTodos = await TodoModel.find({ project_id: id });
    if (getTodos) {
      res.status(200).json({ getTodos, message: "Fetched Todo Details" });
    } else {
      res.status(400).json({ message: "Todo not found"});
    }
  } catch (error){
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Logic to delete todo
exports.delete=async(req,res)=>{
    console.log('inside Api call to delete todo')
    const {id}=req.body
    try {
        const deleteTodo=await TodoModel.deleteOne({_id:id})
        if(deleteTodo){
       res.status(200).json({message: "Todo Details deleted" });
        }else{
        res.status(400).json({ message:"Todo not found"});
        }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }

}

//Logic to edit todo
exports.editTodo=async(req,res)=>{
    console.log('inside Api call edit todo list')
    try{
        const updateTodo=await TodoModel.findByIdAndUpdate(
            req.params.id,
            {
                $set:{
                    description:req.body.description,
                    tName:req.body.tName,
                    updated_date:Date.now()
                    

                },
            },
            {new:true}
        );
        res.status(200).json({updateTodo,message:'Todo details updated'})
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
        
    }


}
