'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      mail: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
    },
    // {
    //   freezeTableName: true,
    //   instanceMethods: {
    //     generateHash(password) {
    //       return bcrypt.hash(password, 10)
    //     },
    //     validPassword(password) {
    //       return bcrypt.compare(password, this.password)
    //     },
    //   },
    // },
    {
      sequelize,
      modelName: 'user',
    }
  )
  return user
}
