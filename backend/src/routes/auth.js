const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const { name, email, password, operator } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User Already exists" });
    }

    user = new User({ name, email, password, operator });
    await user.save();

    req.session.userId = user._id;

    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        name: user.name,
        email: user.email,
        operator: user.operator,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    req.session.userId = user._id;

    res.json({
      message: "Logged in Successfully",
      user: { name: user.name, email: user.email, operator: user.operator },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Could not log out. Please try again" });
    }
    res.clearCookie("Connect.sid");
    res.json({ message: "Logged out successfully" });
  });
});

router.get("/user", async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: "Unauthorized User" });
  }
  try {
    const user = await User.findById(req.session.userId).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
