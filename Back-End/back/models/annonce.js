'use strict';
module.exports = (sequelize, DataTypes) => {
  const annonce = sequelize.define('annonce', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    pj: DataTypes.STRING,
    gw2: DataTypes.BOOLEAN,
    albion: DataTypes.BOOLEAN,
    lol: DataTypes.BOOLEAN,
    overwatch: DataTypes.BOOLEAN,
    tm2: DataTypes.BOOLEAN
  }, {});
  annonce.associate = function (models) {
    // associations can be defined here
    models.annonce.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return annonce;
};