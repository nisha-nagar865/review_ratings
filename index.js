const express = require('express')
const app = express()
var userSchema = require('./model/user_shema');
const User = require('./model/user_shema');
var bodyParser = require("body-parser");
const { response } = require('express');
const bcrypt=require("bcrypt");
const router = require("./routes/userRoutes")
require('./model/config')
//this line is used for parsing the data which was in String format now this is converting into json formate
app.use(bodyParser.json());



//GET API for geting data from the database
// app.get('/', async(req,res)=>{
//     console.log('get request')
// })

// app.post('/registerUser',async(req,res)=>{
//     const {email,password}=req.body;
//     //const newuser = new userSchema(req.body);
//     //we can also rewrite this code like this
//     const userdata = new userSchema({
//         name     : req.body.name,
//         email    : req.body.email,
//         password : req.body.password,
//         phone    : req.body.phone,
//         city     : req.body.city,
//         state    : req.body.state
//     })
    
    
//     try{
//         console.log('inside try');
//         const email = req.body.email; 
//         const userExists = await User.findOne({email : email})

//         if(userExists){
//             console.log('inside if block');
//             return res.status(400).json({status : 400, error : "Email already exist"});
//         }
//         const salt = await bcrypt.genSalt(10);
//         userdata.password = await bcrypt.hash(password,salt);
//         const addRes = await userdata.save()
//         // console.log("after try");
//         // res.json(addRes)
//     } 
//     catch(err){
//         console.log(err);
//         res.send('Error')
//     }
// })
app.use('/',router)

app.listen(9000, function(req,res){
console.log("server is running on port no : 9000");
})

