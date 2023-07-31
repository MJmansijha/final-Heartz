const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Heartz")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user_data=new mongoose.model('user_data',logInSchema)

module.exports=user_data