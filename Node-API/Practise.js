//**Step 1: Importing Express.js
const express = require('express')

//*! npm i --save-dev @types/express (use this if there is an underline mark on express)

//**Step 2: Importing Mongoose DB
const mongoose = require('mongoose')

//**Step 3: Assigning the express()
const app = express()

//**Step 4: Using a Middleware to Parse the request body to JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }))                                //this makes sure that the values can be updated by other means without json


//**Step 5: Importing the Model
const Product = require('./Models/productmodel')

//**Step 6: Establish DB Connection
// const { MONGO_URI } = require('./config');



mongoose.connect('mongodb+srv://root:root@learningapi.svclyxa.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(() => {
        console.log("Connected to MongoDB Server");
        app.listen(3000, () => {
            console.log("Node API is running on port 3000");
        });
    })
    .catch((error) => {
        console.log(error);
    });



//**Step 7: Sending Data to DB
app.post('/products', async (req, res) => {
    try {
        const products = await Product.create(req.body);
        res.status(200).json(products);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "message": error.message })
    }
})



//**Step 8: Receiving all the Data from DB
app.get('/products', async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(product);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ "message": "No such data found" })
    }

})


//**Step 9: Receiving a single Data from DB
app.get('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ "message": "Invalid ID parameter" });
        }

        const receivedItem = await Product.findById(id)
        if (!receivedItem) {
            return res.status(404).json({ "message": `Item with the ${id} not found` });
        }

    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
})



//**Step 10: Updating a single Data to DB by ID
app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ "message": "Invalid ID parameter" });
        }

        const updatedItem = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedItem) {
            return res.status(404).json({ "message": `Cannot find any product with ID ${id}` });
        }

        res.status(200).json(updatedItem);

    } catch (error) {
        res.status(500).json({ "message": error.message });
    }
});



//**Step 11: Deleting an item from DB
app.delete('/products/:id', async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ "message": "Invalid ID parameter" });
        }

        const deletedItem = await Product.findByIdAndDelete(id)

        if (!deletedItem) {
            return res.status(404).json({ "message": `Item with the ID ${id} not found` });
        }

        // await deletedItem.remove();

        res.json(deletedItem)
    } catch (error) {
        res.status(500).json({ "message": error.message });
    }

})


//*! To kill all active ports ==>                                            sudo killall -9 node