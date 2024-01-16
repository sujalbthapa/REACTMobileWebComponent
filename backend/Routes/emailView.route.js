const express = require('express');
const router = express.Router();
const User = require('../Models/user.model.js');

router.get('/', async (req, res) => {
    try{
        const user = await User.findOne({username: req.session.username});
        res.json(user.email);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;