const express = require('express');
const router = express.Router();
const User = require('../Models/user.model.js');

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ message: "User does not exist" });
        }
        if (req.body.password != user.password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        if (!user.role.includes(req.body.role)) {
            return res.status(400).json({ message: "User is not a "+req.body.role });
        }
        req.session.username = user.username;
        req.session.role = req.body.role;
        res.redirect("http://localhost:3000/dashboard");
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;