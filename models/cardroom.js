'use strict';
module.exports = (sequelize, DataTypes) => {
  const CardRoom = sequelize.define('CardRoom', {
    name: DataTypes.STRING,
    cityId: DataTypes.INTEGER,
    stateId: DataTypes.INTEGER,
    food: DataTypes.BOOLEAN
  }, {});
  CardRoom.associate = function(models) {
    const ops = {
      foreignKey: 'roomId',
      otherKey: 'userId',
      through: 'Subscription'
    }

    CardRoom.belongsTo(models.City, { foriegnKey: 'cityId'});
    CardRoom.belongsTo(models.State, { foriegnKey: 'stateId'});
    CardRoom.hasMany(models.Review, { foreignKey: 'roomId' });
    CardRoom.hasMany(models.Jackpot, { foriegnKey: 'roomId'});
    CardRoom.belongsToMany(models.User, ops)
  };
  return CardRoom;
};