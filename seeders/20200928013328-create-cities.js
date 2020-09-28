'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cities', [
      { name: 'San Diego', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Los Angeles', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'San Francisco', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Philadelphia', stateId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: 'San Antonio', stateId: 8, createdAt: new Date(), updatedAt: new Date()},      
      { name: 'Dallas', stateId: 8, createdAt: new Date(), updatedAt: new Date()},

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
