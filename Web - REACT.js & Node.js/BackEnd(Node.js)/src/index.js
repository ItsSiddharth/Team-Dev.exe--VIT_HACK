const express=require("express")
require('./db/mongoose')
const morgan = require('morgan');
const bodyPraser=require('body-parser')
const dataRouter=require('./routers/upload')
const uploadRouter=require("./routers/pdf_converter")

const app=express()
app.use(morgan('dev'));
const port =process.env.PORT || 3000

app.use(bodyPraser.urlencoded({extended:true}))
app.use(express.json())
app.use(dataRouter)
app.use(uploadRouter)

app.get('/',function(req,res){
    res.send("It is working")
})

app.listen(port,()=>{
    console.log("Server is up on the port "+port)
})