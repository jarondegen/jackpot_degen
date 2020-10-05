const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Jackpot, CardRoom } = require('../../models')
const { check, validationResult } = require('express-validator');


const roomName =
  check('roomName')
    .not().isEmpty()
    .withMessage('Please slected where')

const hit =
  check('hit')
    .not().isEmpty()
    .withMessage('Was the jackpot hit?');

const amount =
    check('amount')
        .not().isEmpty()
        .withMessage('Please enter the amount')
        .isInt({ min: 100, max: 200000 })
        .withMessage('jackpot must be between $100 and $200,000')

router.post('/new', [roomName, hit, amount], asyncHandler(async function (req, res, next) {
    const { reporterId, roomName, hit, amount } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }
    //finding id and cityId based on user input
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
        roomId: id, cityId, createdAt: new Date()
    });
    res.json('ok');
}));

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
    const roomId = req.params.id
    const jackpots =  await Jackpot.findAll({
        attributes: ['amount', 'createdAt'],
        where: {roomId},
        order: [['createdAt', 'ASC']]
    })
    const amounts = [];
    const dates = [];
    for (let i = jackpots.length > 15 ?jackpots.length -15 : 0; i<jackpots.length; i++) {
        const jackpot = jackpots[i]
        amounts.push(jackpot.dataValues.amount);
        dates.push(jackpot.dataValues.createdAt)
    };
    const roomNameFind = await CardRoom.findOne({
        attributes: ['name'],
        where: {id: roomId}
    })
    const roomName = roomNameFind.dataValues.name
    res.json({amounts, dates, roomName})
}))

module.exports = router;