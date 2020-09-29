'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}


module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: 'demouser', email: 'demo@example.com', cityId: 3, hashedPassword: createPassword(), createdAt: new Date(), updatedAt: new Date() },
      { userName: 'jron2008', email: 'JaronDegen@yahoo.com', cityId: 1, hashedPassword: createPassword(), createdAt: new Date(), updatedAt: new Date() },
      { userName: 'degengambler', email: 'superpunter42069@reraise.com', cityId: 2, hashedPassword: createPassword(), createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
