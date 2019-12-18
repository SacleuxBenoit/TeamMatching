'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserGuild = sequelize.define('UserGuild', {
    pseudo: DataTypes.STRING,
    email: DataTypes.STRING,
    mdp: DataTypes.STRING,
    guilde: DataTypes.BOOLEAN,
    discordpv: DataTypes.STRING,
    discordgu: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  UserGuild.associate = function(models) {
    // associations can be defined here
  };
  return UserGuild;
};