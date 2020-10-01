const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { CardRoom, State, City } = require('../../models')

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
    console.log(rooms)
    const roomNames = rooms.map(room => [room.dataValues.name, room.dataValues.city.name, room.dataValues.id])
    res.json(roomNames)
}));


module.exports = router;