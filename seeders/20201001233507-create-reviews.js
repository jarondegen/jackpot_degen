'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      { userId: 1, roomId: 1, review: 'What are great room.', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, roomId: 1, review: 'Friendly dealers', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, roomId: 1, review: 'no food :(', createdAt: new Date(), updatedAt: new Date() },
      { userId: 1, roomId: 2, review: 'The room is much bigger than I expected but players were crazy', createdAt: new Date(), updatedAt: new Date() },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
