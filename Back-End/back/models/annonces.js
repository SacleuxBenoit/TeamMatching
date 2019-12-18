'use strict';
module.exports = (sequelize, DataTypes) => {
  const Annonces = sequelize.define('Annonces', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    pj: DataTypes.STRING,
    g2w: DataTypes.BOOLEAN,
    albion: DataTypes.BOOLEAN,
    lol: DataTypes.BOOLEAN,
    overwatch: DataTypes.BOOLEAN,
    tm2: DataTypes.BOOLEAN
  }, {});
  Annonces.associate = function (models) {
    // associations can be defined here
    models.Annonces.belongsTo(models.userguild, {
      foreignKey: "userguildId",
      allowNull: false
    }
    )
  };
  return Annonces;
};