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


module.exports = router;