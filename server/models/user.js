'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        // define association here
        User.associate = function (models) {
            User.hasMany(models.Recipe)
        }
    }
  };

  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
    // models/user.js

    // name: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    // password: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};