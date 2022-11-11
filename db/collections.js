const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/minor_base')

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