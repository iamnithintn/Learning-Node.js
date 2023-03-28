const express = require('express');
const mongoose = require('mongoose');

const app = express()

const Login = require('./Models/LoginModel')

app.use(express.json());


mongoose.connect('mongodb+srv://root:root@learningapi.svclyxa.mongodb.net/Login-Page?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to DB");
        app.listen(3000, () => {
            console.log("On Port");
        })
    }).catch((error) => {
        console.log(error);
    })



//sending new user data to DB
app.post('/users', async (req, res) => {
    try {
        const UserInfo = await Login.create(req.body);
        res.status(200).json(UserInfo);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "message": error.message })
    }
})

app.get('/users', async (req, res)=>{
    try {
        const UserData = await Login.find({});
        res.status(200).json(UserData)
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
})


