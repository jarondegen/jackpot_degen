'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    module.exports = {
      up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Jackpots', [
          { hit: true, reporterId: 1, amount: 85000, roomId: 1, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 2, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 3, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 4, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 5, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 6, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 7, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 8, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 9, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 10, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 11, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 12, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 13, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 14, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 15, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 16, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 17, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 18, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 19, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 20, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 21, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 22, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 23, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 24, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 25, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 26, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 27, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 28, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 29, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 30, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 31, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 32, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 33, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 34, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 35, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 36, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 37, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 38, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 39, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 40, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 41, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 42, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 43, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 44, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 45, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 85000, roomId: 46, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 60000, roomId: 47, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 1000, roomId: 47, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 87000, roomId: 1, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 70000, roomId: 2, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 7000, roomId: 3, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 82000, roomId: 4, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 5, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 5000, roomId: 6, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 86000, roomId: 7, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 70000, roomId: 8, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 5000, roomId: 9, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 92000, roomId: 10, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 50000, roomId: 11, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 3000, roomId: 12, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 86000, roomId: 13, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 14, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 4000, roomId: 15, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 81000, roomId: 16, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 80000, roomId: 17, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 5000, roomId: 18, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 87000, roomId: 19, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 20, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 2000, roomId: 21, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 65000, roomId: 22, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 23, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 3000, roomId: 24, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 87000, roomId: 25, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 30000, roomId: 26, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 3000, roomId: 27, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 20000, roomId: 28, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 29, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 4600, roomId: 30, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 80000, roomId: 31, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 30000, roomId: 32, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 4000, roomId: 33, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 80000, roomId: 34, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 35, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 3000, roomId: 36, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 84000, roomId: 37, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 38, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 2000, roomId: 39, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 89000, roomId: 40, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 80000, roomId: 41, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 500, roomId: 42, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 95000, roomId: 43, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 40000, roomId: 44, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 4000, roomId: 45, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: true, reporterId: 1, amount: 83000, roomId: 46, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 80000, roomId: 47, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
          { hit: false, reporterId: 1, amount: 2000, roomId: 47, cityId: 1, createdAt: new Date(), updatedAt: new Date() },

        ], {});

      },
    
      down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Jackpots', null, {});
      }
    };
    

