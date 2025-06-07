const mongo=require("mongoose");

async function connectmongo(url){
    return mongo.connect(url);
}
module.exports={
    connectmongo,
};