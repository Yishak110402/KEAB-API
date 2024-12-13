const req = require("express/lib/request")
const Message = require("./../models/messageModel")
const validate = require("validator")

exports.sendMessage = async(req, res)=>{
    const {name, email, message} = req.body
    if (!name){
        return res.json({
            status:"fail",
            message:"Name is required"
        })
    }
    if (!email){
        return res.json({
            status:"fail",
            message:"Email is required"
        })
    }
    if (!message){
        return res.json({
            status:"fail",
            message:"Message is required"
        })
    }
    if(!validate.isEmail(email)){
        return res.json({
            status:"fail",
            message:"Invalid Email"
        })
    }
    const newMessage = await Message.create({name, email, message})
    if (newMessage){
        return res.json({
            status:"success",
            message:"Message Sent Successfully"
        })
    }
    else{
        return res.json({
            status:"fail",
            message:"Message Not Sent"
        })
    }
}

exports.getAllMessages = async(req, res) =>{
    const messages = await Message.find()
    if (!messages){
        return res.json({
            status:"fail",
            message:"Failed to load messages"
        })
    }
    return res.json({
        status:"success",
        data:{
            messages
        }
    })
}