//userdb.js
const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/Heartz")
.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed usrdb');
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
});

const userdata=new mongoose.model('userdata', logInSchema);

module.exports=userdata;