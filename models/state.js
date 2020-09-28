'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING
  }, {});
  State.associate = function(models) {
    State.hasMany(models.City, { foriegnKey: 'stateId'});
    State.hasMany(models.CardRoomRequest, { foriegnKey: 'stateId'});
    State.hasMany(models.CardRoom, { foriegnKey: 'stateId'});
  };
  return State;
};