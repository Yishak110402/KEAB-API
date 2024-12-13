const mongoose = require("mongoose")

const messageSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,        
    },
    email:{
        type:String,
        required: true,
    },
    message:{
        type:String,
        required: true,
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
    replied:{
        type:Boolean,
        default:false
    }
})

const Message = mongoose.model("Message",messageSchema)

module.exports = Message