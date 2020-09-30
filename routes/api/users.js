const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const router = express.Router();

function createPassword(password) {
    return bcrypt.hashSync(password);
  }

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll({attributes: ['id', 'userName', 'email']});
    res.json({ users });
}));

router.post('/new', asyncHandler(async function (req, res, next) {
    const { formDetails: {cityId, userName, email, password } } = req.body
    const newMember =  await User.create({
        cityId, 
        userName, 
        email, 
        hashedPassword: createPassword(password),
        createdAt: new Date(),
        updatedAt: new Date()
    })
    
    res.json('ok');
}))


module.exports = router;
