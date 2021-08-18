const db = require('../data/db');
(async () => {
  console.log("passou por aqui")
  // await db.insertCustomers({ nome: "zé", idade: 18, uf: "SC" })
  // await db.updateCustomer(3, { nome: "zézim", idade: 18, uf: "SCc" })
  await db.deleteCustomer(12)
  const clientes = await db.selectCustomers();
  console.log(clientes);
})()




/*
const getClientes = async () => {
  // const db = require('./db');
  console.log("passou por aqui")
  const clientes = await db.selectCustomers();
  clientes.forEach(val => console.log(val))
}

getClientes() */
/*
const postCliente = async (cliente) => {
  const db = require('./db');
  console.log("passou por aqui")
  await db.insertCustomers(cliente)
}

postCliente({ nome: "zé", idade: 283, uf: "SC" }) */