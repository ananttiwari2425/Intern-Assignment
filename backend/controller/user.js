const User = require('../model/user')
const mongoose = require('mongoose');


const postEmail = (req,res)=>{
    console.log('hello');
}

const deleteEmail = (req,res)=>{
    console.log('Deleted');
}



module.exports = {postEmail,deleteEmail};