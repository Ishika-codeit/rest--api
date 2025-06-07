const express=require('express');

const router=express.Router();

//importing controller
const {handlealluser,getuserbyid,newuser,handleupdate,handledelete}= require("../controllers/user");


//group both
// router.get("/",handlealluser);
// router.post("/",newuser);
router.route("/")
.get(handlealluser)
.post(newuser);




router.route("/:id")
.get(getuserbyid)
    //async(req,res)=>{
//     //  const user=await usermodel.findById(req.params.id);
//     //  if(!user) return res.status(404).json({error :"user not found"});
//     //  return res.json(user);
 //
 .patch(handleupdate
    //async(req,res)=>{
    //  await usermodel.findByIdandUpdate(req.params.id,{lastname :"changed"});
    //  return res.json({status : "success"});
 //}
)

 .delete(handledelete
    //async(req,res)=>{
    //   await usermodel.findByIdandDelete(req.params.id);
    //   return res.json({status :"success"});
 //}
);

    //
//async(req,res)=>{
    // const body=req.body;
    // console.log("body",body);
    // if(
    //     !body ||
    //     !body.first_name ||
    //     !body.last_name ||
    //     !body.email ||
    //     !body.gender ||
    //     !body.job_title 
    // ){
    //      return res.status(400).json({msg:"all field are required"});
    // }
    // //using mongodb
    // const result= await usermodel.create({
    //     Firstname:body.first_name,
    //     Lastname:body.last_name,
    //     email:body.email,
    //     Jobtitle:body.job_title,
    //     Gender:body.gender,
    // });



    // console.log("result",result);
    // return res.status(201).json({msg:"success"});

//    }

 

// app.get( '/',async(req,res)=>{
//     // const dbuser=await usermodel.find({});
//     // return res.json(dbuser);
// });

module.exports = router;