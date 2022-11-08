const mongoose = require('mongoose');

const User_Schema = new mongoose.Schema({

    name:{
        type : String,
        require : true
    },
    city:{
        type :  String,
        require : true
    },
    email:{
        type: String,
        require : true
    },
   
    password:{
        type : String,
        reuqire :true
    },
    state:{
        type : String,
        require : true
    },
    is_Active:{
        type : Boolean,
        default : true
    },
    role: {
        type : String,
        default : "user"
    }
   
})


// this line making uodated and created shema autotamicaly
User_Schema.set("timestamps", true)
module.exports = mongoose.model('users', User_Schema)