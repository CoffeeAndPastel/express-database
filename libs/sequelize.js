const { Sequelize } = require('sequelize');

const {config} = require('./../config/config');
const setupModels = require('./../db/models');

//Secure connection
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

sequelize.sync();//To create tables

module.exports = sequelize;