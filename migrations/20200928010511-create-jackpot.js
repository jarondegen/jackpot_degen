'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Jackpots', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hit: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      reporterId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users' }
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      roomId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'CardRooms' }
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cities' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Jackpots');
  }
};