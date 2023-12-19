const express=require("express")
const app=express()

const sqlite=require("sqlite")
const {open}=require("sqlite")
const sqlite3=require("sqlite3")
const cors=require("cors")

require('dotenv').config();
const dbPath=process.env.DB_PATH

app.use(express.json())


let db;
const initializeDbAndServer= async()=>{
    try{
        db= await open({
            filename: dbPath,
            driver:sqlite3.Database
        })

        const PORT = process.env.PORT || 3000;
        app.listen(port, ()=>{
            console.log("Server Running at 3000")
        })

    }
    catch(e){
        console.log(e.message)
    }
}

initializeDbAndServer();

//Write all apis here 

app.get("/", (request,response)=>{

  response.send("hi")

})


