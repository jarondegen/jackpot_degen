const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Jackpot, CardRoom } = require('../../models')

router.post('/new', asyncHandler(async function (req, res, next) {
    //finding id and cityId based on user input
    const { reporterId, roomName, hit, amount } = req.body;
    const {dataValues: {id, cityId}} = await CardRoom.findOne({
        attributes: ['id', 'cityId'],
        where: {'name': roomName}
    }) 
    //if hit:true than recording all previous records of cardroom to hit
    if (hit) {
        const hitJackpots = await Jackpot.update({
            hit: true},
            {where: {'roomId': id}})
    }

    //creating new jackpot
    const newJackpot = await Jackpot.create({
        reporterId, roomName, hit, amount,
        roomId: id, cityId
    });
    res.json('ok');
}));

module.exports = router;