'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardRoomRequest = sequelize.define('CardRoomRequest', {
    stateId: DataTypes.INTEGER,
    cityId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  CardRoomRequest.associate = function(models) {
    CardRoomRequest.belongsTo(models.City, { foriegnKey: 'cityId'});
    CardRoomRequest.belongsTo(models.State, { foriegnKey: 'stateId'});
  };
  return CardRoomRequest;
};