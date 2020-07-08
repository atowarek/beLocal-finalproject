module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    'user',
    {
      name: DataTypes.STRING,
      mail: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      password: DataTypes.STRING,
      //hostingId: DataTypes.INTEGER, >> should be added?
    },
    {}
  )
  user.associate = function (models) {
    // user.hasMany(models.activitie)
    // user.hasMany(models.activitie, { foreignKey: 'hostingId' })
  }

  return user
}
