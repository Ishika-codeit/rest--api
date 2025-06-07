const usermodel=require("../models/user");

async function handlealluser(req,res){
     const dbuser=await usermodel.find({});
    return res.json(dbuser);
}

async function getuserbyid(req,res){
    const user=await usermodel.findById(req.params.id);
     if(!user) return res.status(404).json({error :"user not found"});
     return res.json(user);
}

async function newuser(req,res){
    const body=req.body;
    console.log("body",body);
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title 
    ){
         return res.status(400).json({msg:"all field are required"});
    }
    //using mongodb
    const result= await usermodel.create({
        Firstname:body.first_name,
        Lastname:body.last_name,
        email:body.email,
        Jobtitle:body.job_title,
        Gender:body.gender,
    });



    console.log("result",result);
    return res.status(201).json({msg:"success",id: result._id});

}
async function handleupdate(req,res){
    await usermodel.findByIdAndUpdate(req.params.id,{lastname :"changed"});
    return res.json({status : "success"});
}

async function handledelete(req,res){
   await usermodel.findByIdAndDelete(req.params.id);
    return res.json({status :"success"});
}

module.exports ={
    handlealluser,
    getuserbyid,
    newuser,
    handleupdate,
    handledelete,
}