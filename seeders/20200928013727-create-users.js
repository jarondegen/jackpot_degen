'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      { userName: 'demouser', email: 'DemoUser@example.com', cityId: 3, createdAt: new Date(), updatedAt: new Date() },
      { userName: 'jron2008', email: 'JaronDegen@yahoo.com', cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { userName: 'degengambler', email: 'superpunter42069@reraise.com', cityId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
