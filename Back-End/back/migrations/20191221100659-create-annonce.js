'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('annonces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      g2w: {
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
      idUSERS: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
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
    return queryInterface.dropTable('annonces');
  }
};