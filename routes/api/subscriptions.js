const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Subscription } = require('../../models')

router.post('/new', asyncHandler(async function (req, res, next) {
    const { userId, roomId } = req.body
    
    const newSub = await Subscription.findOrCreate({
        where: {userId, roomId}
    });
    res.json('ok');
}));


module.exports = router;