const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true,trim:true},
    mobile:{type:Number,required:true,unique:true},
    rollNo:{type:String,required:true,unique:true,trim:true}
});

const studentModel = mongoose.model("students",schema);

module.exports = studentModel;