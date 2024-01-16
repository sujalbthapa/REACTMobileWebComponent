const express = require("express");
const router = express.Router();
const User = require("../Models/user.model");
const Announcement = require("../Models/announcement.model");

router.put("/:annId", async (req, res) => {
    try {
        const ann = await Announcement.findOneAndUpdate(
            { annId: req.params.annId },
            {
                annContent: req.body.annContent
            },
            { new: true }
        );
        if (!ann) {
            return res.status(400).json({ message: "Announcement not found!" });
        }
        res.status(200).json(ann);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;