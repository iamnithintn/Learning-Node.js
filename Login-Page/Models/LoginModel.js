const mongoose = require('mongoose')

const loginSchema = mongoose.Schema({
    userID: {
        type: String,
        required: [true, "Please enter the user name"]
    },
    password: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)


const LoginDetails = mongoose.model('LoginDetails',loginSchema);

module.exports = LoginDetails;
