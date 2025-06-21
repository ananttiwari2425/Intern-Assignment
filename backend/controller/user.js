const User = require('../model/user')
const nodemailer = require("nodemailer");
const mongoose = require('mongoose');

const postEmail = async (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
  
    try {
      const newUser = await User.create({ email });
  
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        secure: true,
        auth: {
          user: "ananttiwari2425@gmail.com",
          pass: "ozrvvjwswlzjzbsk",
        },
      });
  
      const mailOptions = {
        from: "ananttiwari2425@gmail.com",
        to: email,  // correct format
        subject: "Product Details",
        text: "Product Details",
        html: "Product Details",
      };
  
      const info = await transporter.sendMail(mailOptions);
      console.log("Message sent:", info.messageId);
  
      res.send("done");
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error sending email or saving user" });
    }
  };
  

// const User = require('../model/user')
// const nodemailer = require("nodemailer");
// const mongoose = require('mongoose');


// const postEmail = async(req,res)=>{
//     const {email}=req.body 

//     if(!email)
//     {
//         res.json({message:"Required fields can't be empty"})
//     }

//     const newUser=await User.create({
//         email
//     })   

// // Create a test account or replace with real credentials.
// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   secure: true, // true for 465, false for other ports
//   auth: {
//     user: "ananttiwari2425@gmail.com",
//     pass: "ozrvvjwswlzjzbsk",
//   },
// });

// // Wrap in an async IIFE so we can use await.
// (async (email) => {
//   const info = await transporter.sendMail({
//       from: 'ananttiwari2425@gmail.com',
//       to: email,
//       subject: "Hello ✔",
//       text: "Hello world?",
//       html: "<b>Hello world?</b>", // HTML body
//   });

// //   console.log("Message sent:", info.messageId);
// })();

// // try{
// //     await User.deleteOne({_id:req.params.id})
// //     res.json({status:"ok"})
// // }
// // catch(err){
// //     return res.status(400).json({message:"error"})
// // }

// res.send('done');

// }

// // const deleteEmail = async(req,res)=>{
// //     try{
// //         await User.deleteOne({_id:req.params.id})
// //         res.json({status:"ok"})
// //     }
// //     catch(err){
// //         return res.status(400).json({message:"error"})
// //     }
// // }

module.exports = {postEmail};