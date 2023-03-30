const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://root:root@learningapi.svclyxa.mongodb.net/Todo-App?retryWrites=true&w=majority').on('open',()=>{
    console.log('Connected to MongoDB');
}).on('error',()=>{
    console.log("Mongoose error");
})

module.exports = connection;