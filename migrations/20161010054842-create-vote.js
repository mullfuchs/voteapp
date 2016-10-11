'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('votes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mVote: {
        type: Sequelize.INTEGER
      },
      fVote: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.BIGINT
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.BIGINT
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('votes');
  }
};