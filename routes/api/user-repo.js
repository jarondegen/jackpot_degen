const { User, Subscription, CardRoom } = require('../../models');

class NullUser {
  isValid() { return false; }
  setPassword() {}
  isValidPassword() { return false; }
  toSafeObject() { return {}; }
}

async function create(details) {
  const user = await User.build(details);
  user.setPassword(details.password);
  return await user.save();
}

async function findByEmail(email) {
  const user = await User.findOne({ attributes: ['id', 'userName', 'email', 'cityId', 'hashedPassword' ], where: { email } });

  return user || new NullUser();
}

async function findByTokenId(tokenId) {
  const user = await User.findOne({ attributes: ['id', 'email', 'userName', 'hashedPassword', 'tokenId', 'cityId'], where: { tokenId } });
  return user || new NullUser();
}


module.exports = {
  create,
  findByEmail,
  findByTokenId,
};