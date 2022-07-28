const boom = require('@hapi/boom');
const { Op } = require('sequelize');

const { models } = require('../libs/sequelize');

class ProductsService {

  constructor(){
  }

  async create(data) {
    const newProduct = await models.Product.create(data);
    return newProduct;
  }

  async find({ limit = 2, offset = 0, ...query }) {
    //Options
    const options = {
      include: ['category'],
      where: {},
      limit,
      offset
    }
    //Price
    if(query['min_price'] && query['max_price']){
      options.where.price = {
        [Op.between]: [query['min_price'],query['max_price']],
      };
    }else
    if(query['price']){
      options.where.price = query['price'];
    }
    const data = await models.Product.findAll(options);
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
