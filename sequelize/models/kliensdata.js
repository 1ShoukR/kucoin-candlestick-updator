'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kliensData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  kliensData.init({
    startTime: DataTypes.STRING,
    openingPrice: DataTypes.STRING,
    closingPrice: DataTypes.STRING,
    highestPrice: DataTypes.STRING,
    lowestPrice: DataTypes.STRING,
    transactionVolume: DataTypes.STRING,
    TransactionAmount: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kliensData',
  });
  return kliensData;
};