const mongoose=require('mongoose');
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log(e);
})

const Schemas=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:String,

});

const Models=new mongoose.model('Register',Schemas)
module.exports=Models;