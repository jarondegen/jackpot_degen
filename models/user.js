'use strict';

const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
  //   userName: DataTypes.STRING,
  //   email: DataTypes.STRING,
  //   cityId: DataTypes.INTEGER
  // }, {});

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    validates: {
      isEmail: true,
      len: [3, 255],
    }
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    validates: {
      len: [1, 255],
    },
  },
  hashedPassword: {
    allowNull: false,
    type: DataTypes.STRING.BINARY,
    validates: {
      len: [60, 60],
    },
  },
  tokenId: {
    type: DataTypes.STRING
  },
  cityId: DataTypes.INTEGER
}, {});

  User.associate = function(models) {
    const ops = {
      foreignKey: 'userId',
      otherKey: 'roomId',
      through: 'Subscription'
    }
    User.belongsTo(models.City, { foriegnKey: 'cityId'});
    User.hasMany(models.Review, { foreignKey: 'userId' });
    User.hasMany(models.Jackpot, { foriegnKey: 'reporterId'});
    User.belongsToMany(models.CardRoom, ops)
  };
  
  

  User.prototype.isValid = () => true;

  User.prototype.setPassword = function (password) {
    this.hashedPassword = bcrypt.hashSync(password);
    return this;
  };

  User.prototype.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
  }

  User.prototype.toSafeObject = function () {
    // console.log(this)
    return {
      email: this.email,
      id: this.id,
      userName: this.userName,
      cityId: this.cityId,
    };
  }

  
  
  
  
  return User;
};