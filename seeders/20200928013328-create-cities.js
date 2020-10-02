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
      { name: 'New York City', stateId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Buffalo', stateId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Rochester', stateId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Yonkers', stateId: 3, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Pittsburgh', stateId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Allentown', stateId: 2, createdAt: new Date(), updatedAt: new Date()},
      { name: '	Newark', stateId: 4, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Jersey City', stateId: 4, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Las Vegas', stateId: 5, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Reno', stateId: 5, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Henderson', stateId: 5, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Phoenix', stateId: 6, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Tucson', stateId: 6, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Mesa', stateId: 6, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Denver', stateId: 7, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Colorado Springs', stateId: 7, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Aurora', stateId: 7, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Houston', stateId: 8, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Austin', stateId: 8, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Fort Worth', stateId: 8, createdAt: new Date(), updatedAt: new Date()},
      { name: 'El Paso', stateId: 8, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Seattle', stateId: 9, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Spokane', stateId: 9, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Tacoma', stateId: 9, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Vancouver', stateId: 9, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Portland', stateId: 10, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Salem', stateId: 10, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Eugene', stateId: 10, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Columbus', stateId: 11, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Cleveland', stateId: 11, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Cincinnati', stateId: 11, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Chicago', stateId: 12, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Detroit', stateId: 13, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Grand Rapids', stateId: 13, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Warren', stateId: 13, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Jacksonville', stateId: 14, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Miami', stateId: 14, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Tampa', stateId: 14, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Orlando', stateId: 14, createdAt: new Date(), updatedAt: new Date()},
      { name: 'San Jose', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Fresno', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Sacramento', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Long Beach', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Oakland', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Bakersfield', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'Riverside', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
      { name: 'San Bernardino', stateId: 1, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  }
};
