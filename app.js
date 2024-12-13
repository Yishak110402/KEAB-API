const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

app.all('/test',(req, res)=>{
    return res.json({
        status:"success",
        message:"Test Successful"
    })
})

app.listen(6969,()=>{
    console.log("Server is running on port 6969")
})