const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find() {
    const data = await models.Product.findAll({
      include: ['category']
    });
    return data;
  }

  async findOne(id) {
    const product = models.Product.findByPk(id);
    if(!product){
      throw boom.notFound('Product not found');
    }
    return product
  }

  async update(id, changes) {
    const product = await this.findOne(id);
    const response = await product.update(changes);
    return response;
  }

  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
    return { id };
  }

}

module.exports = ProductsService;
