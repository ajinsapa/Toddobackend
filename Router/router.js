const express= require ('express')


const user=require('../Controls/userControls')

//create object for router class using express

const router=new express.Router()

router.post('/user/register',user.register)
router.post('/user/login',user.login)

module.exports=router