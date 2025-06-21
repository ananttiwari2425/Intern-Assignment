const express = require('express')
const {postEmail} = require('../controller/user')

const router = express.Router();

router.post('/add',postEmail);

module.exports = router;