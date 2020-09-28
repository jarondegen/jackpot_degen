'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('States', [
      { name: 'California', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pennsylvania', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New York', createdAt: new Date(), updatedAt: new Date() },
      { name: 'New Jersey', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nevada', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arizona', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Colorado', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Texas', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Washington', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oregon', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ohio', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Illinois', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Michigan', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Florida', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  }
};
