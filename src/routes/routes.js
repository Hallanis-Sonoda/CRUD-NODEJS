const express = require('express');
const usuarioController = require('../controllers/usuarioController.js');
const enderecoController = require('../controllers/enderecoController.js');

const routes = express.Router();
//usuario
routes.get('/usuarios', usuarioController.index);
routes.post('/usuarios', usuarioController.store);
routes.put('/usuarios/:usuario_id', usuarioController.update);
routes.delete('/usuarios/:usuario_id', usuarioController.delete);

//endereco
routes.get('/usuarios/enderecos', enderecoController.index);
routes.get('/usuarios/:usuario_id/enderecos', enderecoController.indexById);
routes.post('/usuarios/:usuario_id/enderecos', enderecoController.store);
routes.put('/usuarios/enderecos/:endereco_id', enderecoController.update);
routes.delete('/usuarios/enderecos/:endereco_id', enderecoController.delete);


module.exports = routes;
                                            