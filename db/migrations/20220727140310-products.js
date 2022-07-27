'use strict';

const { CATEGORY_TABLE, CategorySchema } = require("../models/category.model");
const { PRODUCTS_TABLE, ProductSchema } = require("../models/product.model");



module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  }
};
