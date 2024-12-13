const express = require("express")
const router = express.Router()
const messageControllers = require("../controllers/messageControllers")

router.all('/test',(req, res)=>{
    return res.json({
        status:"success",
        message:"Test Successful"
    })
})

router.route('/').post(messageControllers.sendMessage).get(messageControllers.getAllMessages)
router.route("/:id").delete(messageControllers.deleteMessage)
module.exports = router