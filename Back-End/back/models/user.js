'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    mdp: DataTypes.STRING,
    guilde: DataTypes.BOOLEAN,
    discordpv: DataTypes.STRING,
    discordgu: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    models.User.hasMany(models.Annonce)
  };
  return User;
};