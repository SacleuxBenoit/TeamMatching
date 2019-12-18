'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Annonces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      pj: {
        type: Sequelize.STRING
      },
      g2w: {
        type: Sequelize.BOOLEAN
      },
      albion: {
        type: Sequelize.BOOLEAN
      },
      lol: {
        type: Sequelize.BOOLEAN
      },
      overwatch: {
        type: Sequelize.BOOLEAN
      },
      tm2: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Annonces');
  }
};