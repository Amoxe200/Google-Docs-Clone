const express = require('express');
const User = require('../models/user');

const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
        const {name, email, profilePic} = req.body;
        //Check email of already exists( find one email that was sent in the body and check it with email stored in DB)
        let user = await User.findOne({email});
        //Check if the user does not exists
        if (!user){
            user = new User({
                email,
                profilePic,
                name,
            });
            user = await user.save();
        }
        res.json({user});
    }catch(e){

    }
});

module.exports = authRouter;