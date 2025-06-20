const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    type:{
        type:Array,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    additionalImage:{
        type:Array,
    },
    coverImage:{
        type:String,
    },
},{timestamp:true});

module.exports = mongoose.model("Items",itemSchema);