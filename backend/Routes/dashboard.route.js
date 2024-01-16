const express = require('express');
const router = express.Router();
const User = require('../Models/user.model.js');

router.get('/', async (req, res) => {
    if (!req.session.username) {
        return res.status(401).send("Please log in to view this page");
    }
    res.json({ message: "This is the dashboard page", user: req.session.username , role: req.session.role});
});

module.exports = router;