const mongo=require("mongoose");

const userschema=new mongo.Schema({
    Firstname:{
        type:String,
        required:true,
    },
    Lastname:{
        type :String,
        required:false,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    Jobtitle:{
        type:String,
    },
    Gender:{
       type:String,
    }
},{timestamps:true});

const usermodel =mongo.model("USER",userschema);

module.exports=usermodel;