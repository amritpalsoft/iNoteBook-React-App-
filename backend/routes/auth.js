const express=require('express');
// const { Mongoose } = require('mongoose');
const User = require('../models/User');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log(req.body);
    const user=User(req.body)
    user.save();
    res.send(req.body)
})

module.exports=router;