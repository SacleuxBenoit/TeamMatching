'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    mdp: DataTypes.STRING,
    guilde: DataTypes.BOOLEAN,
    discordpv: DataTypes.STRING,
    discordgu: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  user.associate = function (models) {
    // associations can be defined here
    models.user.hasMany(models.annonce)
  };
  return user;
};