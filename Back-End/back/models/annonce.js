'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annonce = sequelize.define('Annonce', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    pj: DataTypes.STRING,
    gw2: DataTypes.BOOLEAN,
    albion: DataTypes.BOOLEAN,
    lol: DataTypes.BOOLEAN,
    overwatch: DataTypes.BOOLEAN,
    tm2: DataTypes.BOOLEAN
  }, {});
  Annonce.associate = function (models) {
    // associations can be defined here
    models.Annonce.belongsTo(models.User, {
      foreignKey: {
        allowNull: false,
        autoIncrement: true
      }
    })
  };
  return Annonce;
};