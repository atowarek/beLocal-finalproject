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
        type: Sequelize.DATE,
      },
      endDate: {
        type: Sequelize.DATE,
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
        type: Sequelize.INTEGER,
      },
      latitude: {
        type: Sequelize.INTEGER,
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
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('activities')
  },
}
