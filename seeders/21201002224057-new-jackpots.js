'use strict';

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
      { hit: true, reporterId: 1, amount: 85000, roomId: 48, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 49, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 50, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 51, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 52, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 53, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 54, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 55, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 56, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 57, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 58, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 59, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 60, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 61, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 62, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 63, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 64, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 65, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 66, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 67, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 68, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 69, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 70, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 71, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 72, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 73, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 74, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 75, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 76, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 77, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 78, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 79, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 80, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 81, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 82, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 83, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 84, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 85, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 86, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 87, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 88, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 89, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 90, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 91, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 92, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 93, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 60000, roomId: 94, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1000, roomId: 95, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 87000, roomId: 96, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 97, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 7000, roomId: 98, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 82000, roomId: 99, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 100, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 101, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 86000, roomId: 102, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 103, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 104, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 92000, roomId: 105, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 106, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 107, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 86000, roomId: 108, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 109, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 110, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 81000, roomId: 111, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 80000, roomId: 112, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 113, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 87000, roomId: 114, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 115, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 116, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 65000, roomId: 117, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 118, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 119, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 87000, roomId: 120, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 121, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 122, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 20000, roomId: 123, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 124, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4600, roomId: 125, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 80000, roomId: 126, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 127, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 128, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 80000, roomId: 129, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 130, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 131, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 84000, roomId: 132, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 133, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 134, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 89000, roomId: 135, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 80000, roomId: 136, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 86000, roomId: 48, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 49, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 50, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 51, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 52, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 53, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 54, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 55, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 500, roomId: 56, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 88000, roomId: 57, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 90000, roomId: 58, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 59, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 91000, roomId: 60, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 61, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 62, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 88000, roomId: 63, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 64, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 65, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 66, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 67, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 68, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 81000, roomId: 69, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 70, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 2000, roomId: 71, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 80000, roomId: 72, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 73, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 74, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 79000, roomId: 75, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 76, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 77, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 80000, roomId: 78, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 79, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 80, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 75000, roomId: 81, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 82, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 83, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 86000, roomId: 84, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 85, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 86, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 84000, roomId: 87, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 88, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 1400, roomId: 89, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 86000, roomId: 90, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 70000, roomId: 91, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 92, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 93, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 94, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 95, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 89000, roomId: 96, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 80000, roomId: 97, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 8000, roomId: 98, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 88000, roomId: 99, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 80000, roomId: 100, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 8000, roomId: 101, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 88000, roomId: 102, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 65000, roomId: 103, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 6000, roomId: 104, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 90000, roomId: 105, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 106, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 107, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 108, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 109, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 110, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 80000, roomId: 111, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 90000, roomId: 112, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 6000, roomId: 113, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 114, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 115, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 3000, roomId: 116, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 63000, roomId: 117, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 30000, roomId: 118, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 119, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 84000, roomId: 120, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 40000, roomId: 121, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 4000, roomId: 122, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 24000, roomId: 123, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 124, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 6600, roomId: 125, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 83000, roomId: 126, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 127, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 128, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 129, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 130, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 5000, roomId: 131, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 87000, roomId: 132, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 50000, roomId: 133, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 6000, roomId: 134, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: true, reporterId: 1, amount: 85000, roomId: 135, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
      { hit: false, reporterId: 1, amount: 90000, roomId: 136, cityId: 1, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jackpots', null, {});
  }
};


