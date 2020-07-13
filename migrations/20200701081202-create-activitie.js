'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('activities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      startDate: {
        type: Sequelize.DATEONLY,
      },
      endDate: {
        type: Sequelize.DATEONLY,
      },
      startHour: {
        type: Sequelize.TIME,
      },
      endHour: {
        type: Sequelize.TIME,
      },
      hostingId: {
        type: Sequelize.INTEGER,
        // references: {

        //   model: 'user',
        //   key: 'id',
        // },
      },
      longitude: {
        type: Sequelize.DOUBLE,
      },
      latitude: {
        type: Sequelize.DOUBLE,
      },
      address: {
        type: Sequelize.TEXT,
      },
      description: {
        type: Sequelize.TEXT,
      },
      category: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.TEXT,
      },
      city: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DOUBLE,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        timestamps: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        timestamps: false,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activities')
  },
}
