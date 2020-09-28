'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CardRooms', [
      { name: 'Lucky Lady', cityId: 1, stateId: 1, food: false,  createdAt: new Date(), updatedAt: new Date() },
      { name: '7 Mile', cityId: 1, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Barona', cityId: 1, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sugar House', cityId: 4, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CardRooms', null, {});
  }
};
