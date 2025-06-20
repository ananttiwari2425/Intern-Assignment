const express = require('express')
const {postEmail,deleteEmail} = require('../controller/user')

const router = express.Router();

router.post('/add',postEmail);
router.delete('/delete/:id',deleteEmail);

module.exports = router;