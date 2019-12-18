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
      idUserguilds: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: Userguilds,
          key: 'id'
        }
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
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Annonces');
  }
};