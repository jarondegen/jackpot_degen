'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: DataTypes.STRING,
    stateId: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    City.belongsTo(models.State, { as: 'state', foriegnKey: 'stateId'});
    City.hasMany(models.CardRoomRequest, { foriegnKey: 'cityId'});
    City.hasMany(models.User, { foriegnKey: 'cityId'});
    City.hasMany(models.CardRoom, { foriegnKey: 'cityId'});
    City.hasMany(models.Jackpot, { foriegnKey: 'cityId'});
  };
  return City;
};