'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    review: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.CardRoom, { foreignKey: 'roomId' });
    Review.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Review;
};