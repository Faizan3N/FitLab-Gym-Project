// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config(); // Load .env file

// Import models and validation middleware
const UserModel = require("./models/User");
const { signinValidation } = require("./middlewares/myvalidator");

// Import gym feature routes
const attendanceRoutes = require('./routes/attendance');
const trainerRoutes = require('./routes/trainers');
const workoutPlanRoutes = require('./routes/workoutPlans');
const subscriptionRoutes = require('./routes/subscriptions');

// Initialize Express app
const app = express();

// Enable CORS and JSON body parsing
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/mydb")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// ✅ Registration route
app.post("/api/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UserModel.create({ name, email, password: hashedPassword });

    res.status(201).json({
      message: "User created successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ✅ Login route
app.post("/login", signinValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Incorrect password" });
    }

    const token = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "24h" }
    );

    res.status(200).json({
      message: "Login successful",
      jwtToken: token,
      email: user.email,
      name: user.name
    });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

// ✅ Mount all gym-related routes
app.use(attendanceRoutes);
app.use(trainerRoutes);
app.use(workoutPlanRoutes);
app.use(subscriptionRoutes);

// ✅ Start the server
app.listen(process.env.PORT, () => {
  console.log(`🚀 LGU Server running at http://localhost:${process.env.PORT} 27-dec`);
});
