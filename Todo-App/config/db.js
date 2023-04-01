const mongoose = require('mongoose');
require('dotenv').config()


const uri = process.env.DB_URL;
const connection = mongoose.createConnection(uri).on('open',()=>{
    console.log('Connected to MongoDB');
}).on('error',()=>{
    console.log("Mongoose error");
})

module.exports = connection;




