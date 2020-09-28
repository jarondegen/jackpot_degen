'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    const ops = {
      foreignKey: 'userId',
      otherKey: 'roomId',
      through: 'Subscription'
    }

    User.belongsTo(models.City, { foriegnKey: 'cityId'});
    User.hasMany(models.review, { foreignKey: 'userId' });
    User.hasMany(models.Jackpot, { foriegnKey: 'reporterId'});
    User.belongsToMany(models.CardRoom, ops)
  };
  return User;
};