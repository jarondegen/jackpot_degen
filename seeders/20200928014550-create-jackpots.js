'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jackpots', [
      { hit: true, reporterId: 1, amount: 85000, roomId: 1, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 2, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 3, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jackpots', null, {});
  }
};
