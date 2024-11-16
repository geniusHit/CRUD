const express = require('express')
const app = express()
require("dotenv").config()
//require("./dbconnection/connection")
//const port = process.env.port
const mongoose=require("mongoose")
const cors=require("cors")
app.use(cors())
mongoose.connect("mongodb://localhost:27017/rohit")
.then(()=>{
    console.log("Connection Successfull")
})
.catch((error)=>{
    console.log(`Error: ${error}`)
})
const port=8011

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello this is home page.")
})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String
    },

    lastName: {
        type: String
    },

    email: {
        type: String
    },

    jobTitle: {
        type: String
    },

    gender: {
        type: String
    }
})
const User = mongoose.model("user", userSchema)

app.post("/saveData", async (req, res)=>{
    console.log(req.body)
    let data = new User(req.body)
    const result = await data.save()
    res.send("data saved")
})

app.get("/findData", async(req, res)=>{
    const result = await User.find({firstName:"Virat"})
    res.send(result)
})

app.patch("/updateData/:id", async (req, res)=>{
    try{
        const id=req.params.id
        const result=await User.findByIdAndUpdate({_id:id}, req.body, {new:true})
        res.send(result)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})

app.delete("/deleteData/:id", async (req, res)=>{
    try{
        const id = req.params.id
        const deleteData=await User.findByIdAndDelete({_id:id})
        res.send(deleteData)
    }
    catch(error)
    {
        res.status(500).send(error)
    }
})

const testProjectSchema=new mongoose.Schema({
    fullName:{
        type:"String"
    },
    email:{
        type:"String"
    }
})
const testProject=mongoose.model("testProject", testProjectSchema)
app.post("/create", async (req, res)=>{
    console.log(req.body)
    let data = new testProject(req.body)
    const result = await data.save()
    res.send("data saved")
})

app.get("/fetch/:email1", async (req, res)=>{
    const email1=req.params.email1
    const result = await testProject.find({email:email1})
    console.log(result)
    res.send(result)
})

app.get("/showAllData", async (req, res)=>{
    const result=await testProject.find({})
    console.log(result)
    res.send(result)
})

app.patch("/edit/:id/:newname/:newemail", async (req, res)=>{
    try{
        const id=req.params.id
        const newname=req.params.newname
        const newemail=req.params.newemail
        const result=await testProject.updateOne({email:id}, {$set:{fullName:newname, email:newemail}})
        res.send(result)
    }
    catch(error)
    {
        console.log(error)
    }
})

app.delete("/deletee/:em", async (req, res)=>{
    try{
        const em=req.params.em
        const result=await testProject.deleteOne({email:em})
        console.log(result)
        res.send(result)
    }
    catch(error)
    {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})