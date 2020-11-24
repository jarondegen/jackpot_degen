const express = require('express');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const { User } = require('../../models');
const router = express.Router();
const { check, validationResult } = require('express-validator');


function createPassword(password) {
    return bcrypt.hashSync(password);
}

router.get('/', asyncHandler(async function (req, res, next) {
    const users = await User.findAll({attributes: ['id', 'userName', 'email']});
    res.json({ users });
}));


const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password')
    .isLength({
        min: 6})
    .withMessage('Password must be at least 6 characters')
    

const confirmPassword =
    check('confirmPassword')
      .not().isEmpty()
      .withMessage('Please confirm you password')
      
const userName =
    check('userName')
    .not().isEmpty()
    .withMessage('Please provide a User Name');

const cityId =
    check('cityId')
    .not().isEmpty()
    .withMessage('Please select a city');


router.post('/new', [email, password, confirmPassword, userName, cityId], asyncHandler(async function (req, res, next) {
    const { cityId, userName, email, password } = req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next({ status: 422, errors: errors.array() });
    }
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
