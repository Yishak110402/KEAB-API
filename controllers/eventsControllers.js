const req = require("express/lib/request")
const Event = require("./../models/eventsModel")

exports.addEvent = async (req, res) => {
    const {name, date, description, images} = req.body
    if(!name){
        return res.json({
            status:"fail",
            message:"Name is required"
        })
    }
    if(!date){
        return res.json({
            status:"fail",
            message:"Date is required"
        })
    }
    if(!description){    
        return res.json({
            status:"fail",
            message:"Description is required"
        })
    }
    if(!images){
        return res.json({
            status:"fail",
            message:"Images is required"
        })
    }
    const newEvent = await Event.create({name, date, description, images})
    if(!newEvent){
        return res.json({
            status:"fail",
            message:"Failed to create event"
        })
    }

    return res.json({
        status:"success",
        data:{
            newEvent
        }
    })
}

exports.getAllEvents = async(req, res) => {
    const events = await Event.find()
    if(!events){
        return res.json({
            status:"fail",
            message:"Failed to load events"
        })
    }
    return res.json({
        status:"success",
        data:{
            events
        }
    })
}

exports.getSingleEvent = async(req, res)=>{
    const {id} = req.params
    const event = await Event.find(id)
    if(!event){
        return res.json({
            status:"fail",
            message:"Event doesn't exist"
        })
    }
    return res.json({
        status:"success",
        data:{
            event
        }
    })
}

exports.editEvent = async(req, res) => {
    const {id} = req.params
    const event = await Event.findById(id)
    if (!event){
        return res.json({
            status:"fail",
            message:"Event doesn't exist"
        })
    }
    const edittedEvent = await Event.findByIdAndUpdate(id, req.body)
    const newEvent = await Event.findById(id)
    return res.json({
        status:"success",
        data:{
            event: newEvent
        }
    })
}

exports.deleteEvent = async(req, res) => {
    const {id} = req.params
    const event = await Event.findById(id)
    if (!event){
        return res.json({
            status:"fail",
            message:"Event doesn't exist"
        })
    }
    const deletedEvent = await Event.findByIdAndDelete(id)
    return res.json({
        status:"success",
        message:"Event deleted successfully"
    })
}