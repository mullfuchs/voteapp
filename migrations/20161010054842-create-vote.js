'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return [queryInterface.createTable('votes', {
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
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }), queryInterface.bulkInsert('votes', [
        { mVote: 0, fVote: 0, createdAt: Date.now(), updatedAt: Date.now() }
    ])];
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('votes');
  }
};