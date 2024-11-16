const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/rohit")
.then(()=>{
    console.log("Connection Successfull")
})
.catch((error)=>{
    console.log(`Error: ${error}`)
})