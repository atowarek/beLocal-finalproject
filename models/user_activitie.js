'use strict'

module.exports = (sequelize, DataTypes) => {
const user_activitie = sequelize.define('user_activitie', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'user',
      key: 'id'
    }
  },
  activityId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'activitie',
      key: 'id'
    }
  }
  
})
user_activitie.associate = (models) =>{
  user_activitie.belongsTo(models.user)
  user_activitie.belongsTo(models.activitie, {
    foreignKey: 'activityId'
  })
}
return user_activitie;
};
