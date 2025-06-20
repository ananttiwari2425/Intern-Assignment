const express = require('express')
const {getItems,postItem, getItem} = require('../controller/item')

const router = express.Router();
// const verifyToken = require('../middleware/auth')

// router.get('/',getRecipes);
// router.get('/:id',getRecipe);
// router.post("/",upload.single('file'),verifyToken ,addRecipe) //add recipe
// router.put('/:id',upload.single('file'),editRecipe);
// router.delete('/:id',deleteRecipe);

router.get('/allitems',getItems);
router.get('/item/:id', getItem);

// router.get('/item/:id', getItem);
router.post('/add',postItem);

module.exports = router;