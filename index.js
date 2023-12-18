const express=require("express")
const app=express()

const sqlite=require("sqlite")
const sqlite3=require("sqlite3")

require('dotenv').config();
const dbPath=process.env.DB_PATH

app.use("/", (request,response)=>{
    response.json({message: "Hello Agoda CLone Api"})
})

app.listen(3000, ()=>{
    console.log("Server Running at 3000")
})