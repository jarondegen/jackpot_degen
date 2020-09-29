const express = require('express');
const asyncHandler = require('express-async-handler');

const { User } = require('../../models');

const router = express.Router();

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll({attributes: ['id', 'userName', 'email']});
    console.log(users)
    res.json({ users });
}));




module.exports = router;
