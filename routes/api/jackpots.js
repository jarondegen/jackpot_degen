const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Jackpot, CardRoom } = require('../../models')

router.post('/new', asyncHandler(async function (req, res, next) {
    const { reporterId, roomName, hit, amount } = req.body;
    const {dataValues: {id, cityId}} = await CardRoom.findOne({
        attributes: ['id', 'cityId'],
        where: {'name': roomName}
    }) 
    console.log(id, cityId)
    const newJackpot = await Jackpot.create({
        reporterId, roomName, hit, amount,
        roomId: id, cityId
    });
    res.json('ok');
}));


module.exports = router;