const express = require('express');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv').config();
const connectDb = require('./config/db')

const PORT = 3000;

connectDb();
app.use(express.json())
app.use(cors());
// app.use(express.static('public'))

app.use('/',require('./routes/item'));

app.listen(PORT,()=>{
    console.log(`connected to ${PORT}`);
})