const express = require("express");
const router = express.Router();
const User = require("../Models/user.model");
const Announcement = require("../Models/announcement.model");

router.get("/", async (req, res) => {
    try {
        const ann = await Announcement.find();
        res.status(200).json(ann);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/:annId", async (req, res) => {
    try {
        const ann = await Announcement.findOne({annId: req.params.annId});
        if (!ann) {
            return res.status(400).json({ message: "Announcement not found!" });
        }
        res.status(200).json(ann);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.get("/user/:username", async (req, res) => {
    try {
        const user = await User.findOne({username: req.params.username});
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }
        const ann = await Announcement.find({username: req.params.username});
        res.status(200).json(ann);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;