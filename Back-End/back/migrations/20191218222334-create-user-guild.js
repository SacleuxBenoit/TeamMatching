'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserGuilds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pseudo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      mdp: {
        type: Sequelize.STRING
      },
      guilde: {
        type: Sequelize.BOOLEAN
      },
      discordpv: {
        type: Sequelize.STRING
      },
      discordgu: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('UserGuilds');
  }
};