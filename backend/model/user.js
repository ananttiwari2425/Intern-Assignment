const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
},{timestamp:true});

module.exports = mongoose.model("User",userSchema);