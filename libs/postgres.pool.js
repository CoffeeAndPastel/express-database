const {Pool} = require("pg");

const {config} = require('./../config/config');

//Secure connection
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });

module.exports = pool;

//Normal connection
// const pool = new Pool({
  //   host: 'localhost',
  //   port: 5432,
  //   user: 'admin',
  //   password: 'admin123',
  //   database: 'my_store'
  // });
