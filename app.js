const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const messageRouter = require("./routes/messageRouter")
const eventsRouter = require("./routes/eventsRouter")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://yishak:rfTtsGRqkPr5ILhL@write-wave.3yjawuk.mongodb.net/KEAB-Data?retryWrites=true&w=majority&appName=write-wave",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify:false
}).then(()=>{
    console.log('Connection Successful');
    
}).catch((e)=>{
    console.log(e.message);
    
})

app.use("/message",messageRouter)
app.use("/events", eventsRouter)

app.all('/test',(req, res)=>{
    return res.json({
        status:"success",
        message:"Test Successful"
    })
})

app.listen(6969,()=>{
    console.log("Server is running on port 6969")
})