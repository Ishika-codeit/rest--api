
const fs=require("fs");

function logreqres(filename){
 return ((req,res,next)=>{
    fs.appendFile(filename,`\n${Date.now()}: ${req.method}: ${req.ip} :${req.path}\n`,(err,data)=>{
     next();
    });
   
 });
}

module.exports={
    logreqres,
};