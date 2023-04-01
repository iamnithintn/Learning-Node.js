const app = require("./app");
const db = require("./config/db");
const UserModel = require("./model/user.model");

const port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.send('Hello Worlds!!');
// })


app.get("/getmethod", async (req, res) => {

  var data = [];
  for (var i = 0; i < parseInt(req.query.value); i++) {
    data.push({ me: i });
  }
  res.status(200).send(data);
});


app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});






/**

// Import required libraries
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import User model
const User = require("./models/User");

// Initialize Express app
const app = express();

// Set up body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB database
mongoose.connect("mongodb://localhost:27017/myapp", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.error(err));

// Define secret key for JWT token
const secretKey = "mysecretkey";

// Route for user registration
app.post("/register", async (req, res) => {
  try {
    // Check if email already exists in the database
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Create new user object from request body
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    // Encrypt user password using bcrypt library
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(newUser.password, salt);
    newUser.password = hashPass;

    // Save new user to database
    await newUser.save();

    return res.status(201).json({ message: "User registration successful" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Route for user login and returning JWT token
app.post("/login", async (req, res) => {
  try {
    // Check if email exists in database
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare entered password with stored encrypted password using bcrypt library
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    // Create and return JWT token
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
    return res.json({ message: "Login successful", token });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Middleware to authenticate JWT token
const auth = (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decodedToken = jwt.verify(token, secretKey);
    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

// Protected route after authentication with JWT token
app.get("/profile", auth, async (req, res) => {
  try {
    // Find user by decoded userId from JWT token
    const user = await User.findById(req.userId);

    // Return user profile information
    return res.json({
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));





 */
