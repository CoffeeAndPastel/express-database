const {UserSchema, User} = require('./user.model')
const {CustomerSchema, Customer} = require('./customer.model')

function setupModels(sequelize){
  //Init
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  //Association
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
