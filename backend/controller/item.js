const Items = require('../model/item')

const getItems = async(req,res)=>{
    const Item=await Items.find()
    return res.json(Item)
}

const getItem = async(req,res)=>{
    // const Item=await Items.findbuId()
    // return res.json(Item)
}

const postItem = async(req,res)=>{
    // console.log(req,user);
    const {name,type,description,additionalImage,coverImage}=req.body 

    if(!name || !type || !description)
    {
        res.json({message:"Required fields can't be empty"})
    }

    const newItem=await Items.create({
        name,type,description
    })
   return res.json(newItem)
}

module.exports = {getItems,getItem,postItem};