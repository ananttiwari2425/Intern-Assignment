const Items = require('../model/item')
const mongoose = require('mongoose');


const getItems = async(req,res)=>{
    const Item=await Items.find()
    return res.json(Item)
}

const getItem = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  try {
    const item = await Items.findById(id);
    if (!item) return res.status(404).json({ error: 'Item not found' });
    res.json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

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

module.exports = {getItems,postItem,getItem};