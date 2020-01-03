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
      userId: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pj: {
        allowNull: true,
        type: Sequelize.STRING
      },
      gw2: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      albion: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      lol: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      overwatch: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      tm2: {
        allowNull: true,
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