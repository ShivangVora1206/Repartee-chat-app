const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config();
module.exports = function (){
    mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to db");
}).catch((e)=>{
    console.log(e);
    console.log("error connecting to db");
})
}