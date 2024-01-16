const express = require("express");
const router = express.Router();
const User = require("../Models/user.model");

router.put("/:userId", async (req, res) => {
    try {
        const userFoundId = await User.findOne({ userId: req.body.userId});
        const userFoundEmail = await User.findOne({ email: req.body.email, userId: { $ne: req.params.userId } });
        const userFoundUsername = await User.findOne({ username: req.body.username, userId: { $ne: req.params.userId } });
        if (userFoundId) {
            return res.status(400).json({ message: "UserId already in use!" });
        }
        if (userFoundEmail) {
            return res.status(400).json({ message: "Email already in use!" });
        }
        if (userFoundUsername) {
            return res.status(400).json({ message: "Username already in use!" });
        }
        const user = await User.findOneAndUpdate(
            { userId: req.params.userId },
            {
                role: req.body.role,
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            },
            { new: true }
        );
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;