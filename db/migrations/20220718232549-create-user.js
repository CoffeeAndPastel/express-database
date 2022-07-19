'use strict';

const {UserSchema, USER_TABLE} = require('./../models/user.model')

module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema)
  },

  async down () {
    /**
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
