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
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.STRING,
        allowNull: false
      },
      pj: {
        type: Sequelize.STRING,
        allowNull: true
      },
      g2w: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      albion: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      lol: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      overwatch: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      tm2: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userguildId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'UserGuilds',
          key: 'id',
          as: 'userguildId'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Annonces');
  }
};