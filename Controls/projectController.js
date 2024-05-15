const projectModel=require('../Modal/projectModel')


//Logic to add project
exports.AddProject=async(req,res)=>{
    console.log('inside Api call to add project')
    const {title}=req.body
    try {
        if(title===undefined){
            res.status(400).json({message:'title feild is missing'})
        }else{
            const newProject=new projectModel({
                title
            })
            await newProject.save()
            res.status(200).json({newProject,message:'Project Added Succesfully'})
        }       
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
    }
}

//Logic to get all projects
exports.getAllProject=async(req,res)=>{
    console.log('inside Api call to get all projects')
    try {
        const allProjects=await projectModel.find()
        res.status(200).json({allProjects,message:'List of all projects'})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        
    }
}

//Logic to view particular project 
exports.viewProject=async(req,res)=>{
    console.log('inside Api call to view particuar project')
    const {id}=req.params
    console.log(id)
    try {
        const ProjectDetails=await projectModel.findOne({_id:id})
        if(ProjectDetails){
            res.status(200).json({ProjectDetails,message:'Fetched project details'})
        }else{
            res.status(400).json({message:'Project not found'})
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal Server Error'})
        
    }
}

//Logic to delete project
exports.deleteProject=async(req,res)=>{
   console.log('inside api call to delete project')
   const {id}=req.body
   try {
       const deleteTodo=await projectModel.deleteOne({_id:id})
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

//Logic to edit project title
exports.EditProject=async(req,res)=>{
    console.log('inside api call to edit project title')
    try{
        const updateProject=await projectModel.findByIdAndUpdate(
            req.params.id,
            {
                $set:{
                    title:req.body.title,
                 
                },
            },
            {new:true}
        );
        res.status(200).json({updateProject,message:'Project title edited'})
    }catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });

    }
        
}



