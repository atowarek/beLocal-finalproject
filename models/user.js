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
  user.associate = (models) => {
    user.belongsToMany(models.activitie, {
      through: 'user_activitie',
      foreignKey: 'userId'
    });
  };

  return user
}
//user.belongsToMany(activitie, {through: 'user_activitie'})
