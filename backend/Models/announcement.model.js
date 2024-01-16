const mongoose = require("mongoose");

const annSchema = new mongoose.Schema({
    annId: {
        type: Number,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: false
    },
    annContent: {
        type: String,
        required: true,
        unique: false
    }
});

module.exports = mongoose.model("Announcement", annSchema);