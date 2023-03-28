//Step 1:  require express
const express = require('express');


//Step 5: Import Mongoose package
const mongoose = require('mongoose')

const Product = require('./Models/productmodel')


//Step 2: Create an app 
const app = express()


//using middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))         //this makes sure that the values can be updated by other means without json


// Step 4: routes
//(/ means current file, runs by default when called the IP)
app.get('/', (req, res) => {
    res.send("Hello Node API")
})

// here /blog means another route hence should declare /blog after the port number
app.get('/blog', (req, res) => {
    res.send("This is another route")
})

//step 3
// app.listen(3000, ()=>{
//     console.log("Node API is running on port 3000");
// })



//getting data from DB
app.get('/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ "message": error.message })

    }
})


//getting info by id
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ "message": error.message })

    }
})

//Step (Saving Data to DB)

app.post('/products', async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "message": error.message })
    }
})

//Updating Data in DB

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);

        //if item not found
        if (!product) {
            return res.status(404).json({ message: `cannot find any product with ID ${id}` })
        }
        const updatedItem = await Product.findById(id);
        res.status(200).json(updatedItem);

    } catch (error) {
        // console.log(error.message);
        res.status(500).json({ "message": error.message })

    }
})


//Deleting from DB

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: `Cannot find any product with ID ${id}` })
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});




// app.post('/product', (req, res)=>{            (This step is to access the data through the http call)
//     console.log(req.body);
//     res.send(req.body);
// })


//step 5: connect to DB

//optional step below if you are getting strict query

// mongoose.set("strictQuery", false)

// const { MONGO_URI } = require('./config');
// mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("Connected to MongoDB Server");
//     app.listen(3000, () => {
//       console.log("Node API is running on port 3000");
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });






mongoose.connect('mongodb+srv://root:root@learningapi.svclyxa.mongodb.net/Node-API?retryWrites=true&w=majority').then(() => {
    console.log("Connected to MongoDB Server");
    app.listen(3000, () => {
        console.log("Node API is running on port 3000");
    })

}).catch((error) => {
    console.log(error);
})

/** 
** Hello 
*! hi
*? bye
* TODO: 
*/