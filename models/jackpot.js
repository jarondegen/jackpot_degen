'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jackpot = sequelize.define('Jackpot', {
    hit: DataTypes.BOOLEAN,
    reporterId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER
  }, {});
  Jackpot.associate = function(models) {
    Jackpot.belongsTo(models.City, { foriegnKey: 'cityId'});
    Jackpot.belongsTo(models.User, { as: 'user', foriegnKey: 'reporterId'});
    Jackpot.belongsTo(models.CardRoom, { foriegnKey: 'roomId'});
  };
  return Jackpot;
};