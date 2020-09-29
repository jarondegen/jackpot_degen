const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { State } = require('../../models')



router.get('/', asyncHandler(async function (req, res, next) {
    const states = await State.findAll({attributes: ['id','name'], order: ['name']});
    const statesArr = states.map(state => [state.dataValues.name, state.dataValues.id])
    res.json({ statesArr });
}));


module.exports = router;