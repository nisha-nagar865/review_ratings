const mongoose = require('mongoose')
const compReviewSchema = new mongoose.Schema({
    subject : {
        type : String,
        require : true
    },
    review : {
        type : String,
        require : true
    },
    rating : {
        type : Number,
        default : 0
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'user'
    },
    companyId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : 'company'
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
module.exports = mongoose.model('review',compReviewSchema)