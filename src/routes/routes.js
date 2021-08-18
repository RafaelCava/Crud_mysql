const express = require('express');
const { getClientes, postCliente, deleteCliente, getClientesById, updateCliente, substituirCliente } = require('../controllers/controllers');
const routes = express();

routes.route("/clientes")
  .get(getClientes)
  .post(postCliente)

routes.route("/clientes/:id")
  .get(getClientesById)
  .patch(updateCliente)
  .put(substituirCliente)
  .delete(deleteCliente)

module.exports = routes