//* Extracting schema and model 
const { Schema, model } = require('mongoose');

//* Schema creation for employee Collection
const empSchema = new Schema({
    empID: {
        type: Number,
        required: [true, "EMP ID is a required field"],
        unique: true,
    },
    empName: {
        type: String,
        required: [true, "EMP name is a required field"],
    },
    empEmail: {
        type: String,
        required: [true, "EMP email is a required field"],
    },
    empPhone: {
        type: Number,
        required: [true, "EMP phone is a required field"],
    },
});

//* Model creation
const EmpModel = model('Emp', empSchema);


//* Exporting the created model
module.exports = EmpModel;













// const mongoose = require('mongoose');
// const db = require('../configs/db')

// const { Schema } = mongoose;


// const empSchema = new Schema(
//     {
//         empID:{
//             type: Number,
//             required : [true," EMP ID is a required filed"],
//             unique : true,
//         },
//         empName:{
//             type: String,
//             required: [true," EMP name is a required filed"],
//         },
//         empEmail:{
//             type: String,
//             required: [true," EMP email is a required filed"]
//         },
//         empPhone: {
//             type: Number,
//             required : [true," EMP phone  is a required filed"],
//         }
//     }
// )

// const EmpModel = db.model('Emp', empSchema);

// module.exports = EmpModel;


