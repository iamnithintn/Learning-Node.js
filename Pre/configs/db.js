const mongoose = require('mongoose');
require('dotenv').config()

//* Using the db connection url saved in .env file
const url = process.env.DB_URL;

//*establishing a database connection here
const connection = mongoose.createConnection(url).on('open', ()=>{
    console.log(`Connected to DB on port ${process.env.PORT} `);
}).on('error',()=>{
    console.log("Mongoose Connection Error");
})


//* exporting the connection to the index page
module.exports = connection;