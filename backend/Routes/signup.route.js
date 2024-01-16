const express = require("express");
const router = express.Router();
const User = require("../Models/user.model");

router.post("/", async (req, res) => {
  const lastUser = await User.findOne().sort({ field: "asc", _id: -1 });
  let newId;
  if (!lastUser) {
    newId = 1;
  } else {
    newId = lastUser.userId + 1;
  }
  const user = new User({
    userId: newId,
    role: req.body.role,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const userFound = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if (userFound) {
      return res.status(400).json({ message: "User already exists" });
    }
    await user.save();
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
