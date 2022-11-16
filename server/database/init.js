const mongoose = require('mongoose');

module.exports = function (){
    mongoose.connect("url")
.then(()=>{
    console.log("connected to db");
}).catch((e)=>{
    console.log(e);
    console.log("error connecting to db");
})
}