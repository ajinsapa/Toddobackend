const express= require ('express')


const user=require('../Controls/UserControls')
const projectController=require('../Controls/projectController')
const todoController=require('../Controls/todoController')

//create object for router class using express

const router=new express.Router()

router.post('/user/register',user.register)
router.post('/user/login',user.login)

//Api call to add project
router.post('/projects/addProject',projectController.AddProject)

//Api call to get all projects
router.get('/projects/allProjects',projectController.getAllProject)

//Api to view particular project
router.get('/project/viewProject/:id',projectController.viewProject)

//Api to add todo
router.post('/todo/addTodo',todoController.addTodo)

//Api to get todos
router.get('/todo/todoList/:id',todoController.getAllTodos)

//Api call to delete todo
router.delete('/todo/deleteTodo',todoController.delete)

//Api to edit todo list
router.post('/todo/editTodo/:id',todoController.editTodo)

//Api to get single todo
router.get('/todos/getSingleTodo/:id',todoController.getSingleTodo)

//Api call to change status pending/completed
router.put('/todo/updateStatus/:id',todoController.changeStatus)

//Api call to delete project
router.delete('/deleteProject/delete',projectController.deleteProject)

//Api to edit project title
router.post('/project/editProject/title/:id',projectController.EditProject)

module.exports=router