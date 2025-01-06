const express = require('express');
let router = express.Router();

router.get("/user",(req,res)=>{
    res.send("user input");
})

router.get("/newuser",(req,res)=>{
    res.send("new user added");
})

router.get("/createuser",(req,res)=>{
    res.send("create user");
})

router.get('/:id',(req,res)=>{
    res.send("user id is"+req.params.id);
})

router.put('/:id',(req,res)=>{
    res.send("update this id value "+req.params.id);
})

router.put('/:id',(req,res)=>{
    res.send("delete this id value "+req.params.id);
})

const users = [{name:"raja"},{name:"rani"}];

router.param('id',(req,res,next,id)=>{
    console.log(id);
    req.usery =users[id]
    next();
})
module.exports = router;