const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    obj={
        name:'amrit',
        roll:20
    }
    res.json(obj)
})

module.exports=router;