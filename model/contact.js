const mongoose=require('mongoose');

const conschema=new mongoose.Schema({
    name:String,
    phone:Number,
    email:String,
});

const conmodel=mongoose.model('Contact',conschema);

module.exports=conmodel;