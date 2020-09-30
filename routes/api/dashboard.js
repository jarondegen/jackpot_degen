const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Subscription, CardRoom, Jackpot, City, User } = require('../../models')
const sequelize = require('sequelize');

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
    const id = req.params.id
    const roomNames = [];
    const jackpots = []

    const subs = await Subscription.findAll({attributes: ['roomId'], where: {userId: id}});
    const subsArr = subs.map(obj => obj.dataValues.roomId)

    for (let sub of subsArr) {
        let room = await CardRoom.findOne({attributes: ['name'],  where: {id: sub}})
        let jackpot = await Jackpot.findOne({attributes: ['hit', 'reporterId', 'amount', 'createdAt', 'roomId'],  where: {roomId: sub}})
        roomNames.push(room.dataValues.name)
        jackpots.push(jackpot)
    }
    res.json({ roomNames, jackpots, subsArr });
}));


router.get('/big', asyncHandler(async function (req, res, next) {
    const bigOne = await Jackpot.findOne({
        attributes: [[sequelize.fn('max', sequelize.col('amount')), 'Biggest']],
        where: {'hit': false}
    })
    const bigJackpot = await Jackpot.findOne({
        attributes: ['amount', 'roomId', 'cityId', 'reporterId'],
        where: {amount: bigOne.dataValues.Biggest}
    })
    const cardRoom = await CardRoom.findOne({ attributes: ['name'], where: {id: bigJackpot.dataValues.roomId}})
    const JCity = await City.findOne({attributes: ['name'], where:{id: bigJackpot.dataValues.cityId}})
    const reporterUserName = await User.findOne({attributes: ['userName'], where:{id: bigJackpot.dataValues.reporterId}})
    let amount = bigOne.dataValues.Biggest;
    let room = cardRoom.dataValues.name;
    let city = JCity.dataValues.name;
    let reporter = reporterUserName.dataValues.userName
    res.json({amount, room, city, reporter})
}))


module.exports = router;