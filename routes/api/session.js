const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require('express-validator');

const UserRepo = require('./user-repo');
const { authenticated, generateToken } = require('./security-utils');

const router = express.Router();

const email =
  check('email')
    .isEmail()
    .withMessage('Please provide a valid email address')
    .not().isEmpty()
    .normalizeEmail();

const password =
  check('password')
    .not().isEmpty()
    .withMessage('Please provide a password');

router.post('/', [email, password], asyncHandler(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await UserRepo.findByEmail(email);
  if (!user.isValidPassword(password) || !user.dataValues) {
    const error = new Error('Login failed');
    error.status = 401;
    error.title = 'Login failed';
    error.errors = [{
      msg: ['Invalid credentials']
    }];
    res.json({ error });
    return next(error);
  }
  const { jti, token } = generateToken(user);
  // user.tokenId = jti;
  // await user.save();
  res.cookie('token', token);
  res.json({ token, user });
}));

router.delete('/', [authenticated], asyncHandler(async (req, res) => {
  // req.user.tokenId = null;
  // await req.user.save();
  res.clearCookie('token');
  res.json({ message: 'success' });
}));

module.exports = router;