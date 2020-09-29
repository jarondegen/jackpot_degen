const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Subscription, CardRoom, Jackpot } = require('../../models')

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
    const id = req.params.id
    const roomNames = [];
    const jackpots = []
    console.log(id)
    const subs = await Subscription.findAll({attributes: ['roomId'], where: {userId: id}});
    const subsArr = subs.map(obj => obj.dataValues.roomId)
    console.log(subsArr);
    // subsArr.forEach(sub => {
    //     roomNames.push(await CardRoom.findByPk(sub))
    // });
    for (let sub of subsArr) {
        let room = await CardRoom.findOne({attributes: ['name'],  where: {id: sub}})
        let jackpot = await Jackpot.findOne({attributes: ['hit', 'reporterId', 'amount', 'createdAt'],  where: {roomId: sub}})
        roomNames.push(room.dataValues.name)
        jackpots.push(jackpot)
    }
    console.log(jackpots)
    res.json({ roomNames, jackpots });
}));


module.exports = router;