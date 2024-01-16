const express = require('express');
const router = express.Router();
const User = require('../Models/user.model.js');

router.get('/:username', async (req, res) => {
    try{
        if(!req.session.username){
            return res.status(400).json({message: "Not logged in yet"});
        }
        if(req.session.username !== req.params.username){
            return res.status(400).json({message: "You can only view your own profile"});
        }
        const user = await User.findOne({username: req.params.username});
        if(!user){
            return res.status(400).json({message: "User not found"});
        }
        res.json(user);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;