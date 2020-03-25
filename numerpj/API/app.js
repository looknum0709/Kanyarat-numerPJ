const express = require('express');
const mongoose = require('mongoose');
const app = express();  
const bodyparser = require('body-parser')
app.use(bodyparser.json())
const cors = require("cors")
app.use(cors());

//routes
app.get('/',(req, res) => {

});

const fixapi = require('./routes/fixapi');
app.use('/fixapi',fixapi);

mongoose.connect('mongodb+srv://Kanyarat:numnum07@cluster0-9cqd9.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true,userMongoClient:true}) 
console.log('HI connected DB')

app.listen(8000);