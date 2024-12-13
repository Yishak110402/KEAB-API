const express = require("express")
const eventsControllers = require("../controllers/eventsControllers")
const router = express.Router()

router.all('/test',(req, res)=>{
    return res.json({
        status:"success",
        message:"Test Successful"
    })
})

router.route("/").post(eventsControllers.addEvent).get(eventsControllers.getAllEvents)


module.exports = router