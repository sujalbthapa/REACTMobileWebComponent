const express = require("express");
const router = express.Router();
const Announcement = require("../Models/announcement.model");

router.post("/", async (req, res) => {
    const lastAnn = await Announcement.findOne().sort({ field: "asc", _id: -1 });
    let newAnnId;
    if (!lastAnn) {
        newAnnId = 1;
    } else {
        newAnnId = lastAnn.annId + 1;
    }
    const announcement = new Announcement({
        annId: newAnnId,
        username: req.body.username,
        annContent: req.body.annContent
    });
    try {
        // if(!req.session.username){
        //     return res.status(400).json({ message: "Not logged in yet" });
        // }
        // if(req.session.role != "employee"){
        //     return res.status(400).json({ message: "Not an employee" });
        // }
        await announcement.save();
        res.status(201).json({success: true});
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;