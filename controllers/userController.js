const bcrypt = require("bcrypt");
const User = require("../model/user_shema");
const userSchema = require('../model/user_shema');


const userSignup = async(req,res)=>{
    const {email,password}=req.body;
    //const newuser = new userSchema(req.body);
    //we can also rewrite this code like this
    const userdata = new userSchema({
        name     : req.body.name,
        email    : req.body.email,
        password : req.body.password,
        phone    : req.body.phone,
        city     : req.body.city,
        state    : req.body.state
    })
    
    
    try{
        console.log('inside try');
        const email = req.body.email; 
        const userExists = await User.findOne({email : email})

        if(userExists){
            console.log('inside if block');
            return res.status(400).json({status : 400, error : "Email already exist"});
        }
        const salt = await bcrypt.genSalt(10);
        userdata.password = await bcrypt.hash(password,salt);
        const addRes = await userdata.save()
        // console.log("after try");
        // res.json(addRes)
    } 
    catch(err){
        console.log(err);
        res.send('Error')
    }
}

module.exports = {
    userSignup
}