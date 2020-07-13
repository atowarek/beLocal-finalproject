'use strict'

module.exports = (sequelize, DataTypes) => {
  const activitie = sequelize.define(
    'activitie',
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATEONLY,
      endDate: DataTypes.DATEONLY,
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
      longitude: DataTypes.DOUBLE,
      latitude: DataTypes.DOUBLE,
      address: DataTypes.TEXT,
      description: DataTypes.TEXT,
      category: DataTypes.STRING,
      picture: DataTypes.TEXT,
      city: DataTypes.STRING,
      price: DataTypes.DOUBLE
    },
    {}
  )
  activitie.associate = models => {
    activitie.belongsToMany(models.user, {
      through: 'user_activitie',
      foreignKey: 'activityId',
    })
  }

  return activitie
}
