'use strict'

module.exports = (sequelize, DataTypes) => {
  const activitie = sequelize.define(
    'activitie',
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      startHour: DataTypes.TIME,
      endHour: DataTypes.TIME,
      //hostingId: DataTypes.INTEGER,
      //change for the one below? not sure if needed
      hostingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id',
        },
      },
      longitude: DataTypes.INTEGER,
      latitude: DataTypes.INTEGER,
      address: DataTypes.TEXT,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      picture: DataTypes.TEXT,
      city: DataTypes.STRING,
    },
    {}
  )
  // activitie.associate = function (models) {
  //   activitie.belongsTo(models.user, { foreignKey: 'hostingId' })
  // }

  return activitie
}
