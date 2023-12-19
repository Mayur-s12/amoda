const express=require("express")
const app=express()

const sqlite=require("sqlite")
const {open}=require("sqlite")
const sqlite3=require("sqlite3")
const cors=require("cors")

const path=require("path")
const dbPath=path.join(__dirname,"amodaData.db")

app.use(cors())
app.use(express.json())


let db;
const initializeDbAndServer= async()=>{
    try{
        db= await open({
            filename: dbPath,
            driver:sqlite3.Database
        })

        
        app.listen(3000, ()=>{
            console.log("Server Running at 3000")
        })

    }
    catch(e){
        console.log(e.message)
    }
}

initializeDbAndServer();

//Write all apis here 

app.use("/", (request,response)=>{

  response.send("hi")

})


