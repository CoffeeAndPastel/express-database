const { Sequelize } = require('sequelize');

const {config} = require('./../config/config');

//Secure connection
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  logging: true,
  dialect: 'postgres',
});

module.exports = sequelize;
