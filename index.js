const express=require("express")
const app=express()

app.use("/", (request,response)=>{
    response.json({message: "Hello Agoda CLone Api"})
})

app.listen(3000, ()=>{
    console.log("Server Running at 3000")
})