const app = require('./app')
const db = require('./configs/db')
const EmpModel = require('./models/empdetailsmodel')

//* ports
const port = process.env.PORT || 3001


//* server initialize
app.listen(port , ()=>{
    console.log(`Listening on port ${port}`);
})