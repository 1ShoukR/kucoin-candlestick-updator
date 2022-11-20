'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('kliensData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      startTime: {
        type: Sequelize.STRING
      },
      openingPrice: {
        type: Sequelize.STRING
      },
      closingPrice: {
        type: Sequelize.STRING
      },
      highestPrice: {
        type: Sequelize.STRING
      },
      lowestPrice: {
        type: Sequelize.STRING
      },
      transactionVolume: {
        type: Sequelize.STRING
      },
      TransactionAmount: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('kliensData');
  }
};