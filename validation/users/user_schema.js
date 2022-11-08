const joi = require("@hapi/joi")

const schema = {
    registerUser: joi.object({
        name : joi.string().max(20).required(),
        email : joi.string().email().required(),
        password : joi.string().min(6).required(),
        phone_no : joi.number().integer().min(1000000000).max(9999999999).message("Invalid mobile number").required(),
        city : joi.string().required(),
        state : joi.string().required(),
    }).unknown(true),
}