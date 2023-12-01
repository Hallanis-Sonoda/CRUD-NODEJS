const Sequelize = require('sequelize');
const dbConfig = require('../config/database.js');

const Usuario = require('../models/Usuario.js');
const Endereco = require('../models/Endereco.js');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Endereco.init(connection);

Usuario.associate(connection.models);
Endereco.associate(connection.models);

module.exports = connection;