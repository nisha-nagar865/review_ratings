const mongoose = require('mongoose')
const companySchema = new mongoose.Schema({
    companyName : {
        type : String,
        require : true
    },
    location : {
        type : String,
        require : true
    },
    city : {
        type : String,
        require : true
    },
    foundedAt : {
        type : String,
        require : true
    },
    // for putting 
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'user'
    },
    isActive : {
        type : Boolean,
        require : true,
    },
    role : {
        type : String,
        default: "User"
    }
})
userSchema.set('timestamps',true)
module.exports = mongoose.model('company',companySchema)