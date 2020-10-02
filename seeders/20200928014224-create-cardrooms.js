'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CardRooms', [
      { name: 'Lucky Lady', cityId: 1, stateId: 1, food: false,  createdAt: new Date(), updatedAt: new Date() },
      { name: '7 Mile', cityId: 1, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Barona', cityId: 1, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sugar House', cityId: 4, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oceans Eleven', cityId: 1, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hollywood Park Casino', cityId: 2, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Gardens Casino', cityId: 2, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Commerce', cityId: 2, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'RH RedHawk Casino', cityId: 3, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oaks Card Club', cityId: 3, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lucky Chances', cityId: 3, stateId: 1, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Parx Casino', cityId: 4, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Harrah\'s', cityId: 4, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Champions Poker Club', cityId: 5, stateId: 8, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Abby J Card House', cityId: 5, stateId: 8, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Royale Card Club', cityId: 5, stateId: 8, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'ACES Poker Room', cityId: 5, stateId: 8, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rack Daddy\'s', cityId: 6, stateId: 8, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Resorts World Casino NYC', cityId: 7, stateId: 3, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Empire City Casino', cityId: 7, stateId: 3, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seneca Buffalo Creek Casino', cityId: 8, stateId: 3, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Delta Bingo and Gaming', cityId: 8, stateId: 3, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rochester NY Poker', cityId: 9, stateId: 3, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rivers Casino Pittsburgh', cityId: 11, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wind Creek Bethlehem', cityId: 12, stateId: 2, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Down To the Felt', cityId: 14, stateId: 4, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Golden Nugget Poker Room', cityId: 14, stateId: 4, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Venetian', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bellagio', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wynn', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rio', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'ARIA', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'MGM Grand', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Caesars Palace', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Flamingo', cityId: 15, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Silver Legacy Resort Casino', cityId: 16, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Peppermill Resort', cityId: 16, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Club Cal-Neva', cityId: 16, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Atlantis Casino Resort', cityId: 16, stateId: 5, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'The Arena Poker Room', cityId: 18, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gila River', cityId: 18, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Talking Stick Resort', cityId: 18, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Casino Del Sol', cityId: 19, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Desert Diamond', cityId: 19, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fort McDowell Casino', cityId: 20, stateId: 6, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'All In Series Poker', cityId: 21, stateId: 7, food: true,  createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ameristar Black Hawk', cityId: 21, stateId: 7, food: true,  createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CardRooms', null, {});
  }
};
