const express = require('express');
const router = express.Router();
const User = require('../Models/user.model.js');

router.get('/', async (req, res) => {
    try{
        if(req.session.role != "employee"){
            return res.status(400).json({message: "User is not an employee"});
        }
        const userEmails = await User.find({}, { email: 1, _id: 0 });
        userEmails.sort((a, b) => (a.email > b.email) ? 1 : -1);
        res.json(userEmails);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;