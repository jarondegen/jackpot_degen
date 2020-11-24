const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review, User } = require('../../models')

router.get('/:id', asyncHandler(async function (req, res, next) {
    const roomId = req.params.id;
    const reviewsArr = await Review.findAll({
        attributes: ['review','userId', 'createdAt'], 
        order: [['createdAt', 'DESC']], 
        where: { roomId },
        include: { model: User, attributes: ['userName'] },
    });
    res.json({ reviewsArr });
}));

router.post('/new', asyncHandler(async function (req, res, next) {
    const { userId, roomId, review } = req.body;
    await Review.create({userId, roomId, review});
    res.json('ok');
}));


module.exports = router;