const mongoose = require('mongoose');

module.exports = function (){
    mongoose.connect("mongodb+srv://todo-app:todo-app1@cluster0.l15a2yt.mongodb.net/discussionApp?retryWrites=true&w=majority")
.then(()=>{
    console.log("connected to db");
}).catch((e)=>{
    console.log(e);
    console.log("error connecting to db");
})
}