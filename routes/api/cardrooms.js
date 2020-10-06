const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { CardRoom, State, City, Jackpot, User } = require('../../models')

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const room = await CardRoom.findOne({
        attributes: ['name', 'cityId', 'stateId', 'food'],
        where: { id }
    });
    const cityName = await City.findOne({
        attributes: ['name'],
        where: {id: room.cityId}
    })
    const stateName = await State.findOne({
        attributes: ['name'],
        where: {id: room.stateId}
    })
    res.json({room, cityName, stateName});
}));

router.get('/', asyncHandler(async (req, res) => {
    const id = req.params.id
    const rooms = await CardRoom.findAll({
        attributes: ['name', 'cityId', 'id'],
        include: { model: City, as: 'city', attributes: ['name'] },
        order: [[{model: City, as: 'city'}, 'name', 'asc']]
          
    })
    res.json(rooms)
}));


router.get('/states/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const rooms = await CardRoom.findAll({
        attributes: ['name', 'cityId', 'id'],
        include: { model: City, as: 'city', attributes: ['name'] },
        order: [[{model: City, as: 'city'}, 'name', 'asc']],
        where: {stateId: id}

          
    })
    res.json(rooms)
}));

router.get('/cities/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id
    const rooms = await CardRoom.findAll({
        attributes: ['name', 'cityId', 'id'],
        include: { model: City, as: 'city', attributes: ['name'] },
        order: [[{model: City, as: 'city'}, 'name', 'asc']],
        where: {cityId: id}

          
    })
    res.json(rooms)
}));

router.get('/:id(\\d+)/jackpots', asyncHandler(async (req, res) => {
    const id = req.params.id
    const hitJackpots = await Jackpot.findAll({
        attributes: ['hit', 'amount', 'id', 'createdAt', 'reporterId'],
        order: [['createdAt', 'DESC']],
        where: { roomId: id, hit:true }
    })
    const reporters = []
    for (let i=0;i<hitJackpots.length;i++){
        const jackpot = hitJackpots[i];
        const user = await User.findOne({
            attributes:['userName'],
            where:{id:jackpot.dataValues.reporterId}
        }) 
        reporters.push(user)
    }
    res.json({hitJackpots, reporters})
}));


module.exports = router;