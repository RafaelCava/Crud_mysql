const db = require('../data/db');


/* (async () => {
  console.log("passou por aqui")
  // await db.insertCustomers({ nome: "zé", idade: 18, uf: "SC" })
  // await db.updateCustomer(3, { nome: "zézim", idade: 18, uf: "SCc" })
  await db.deleteCustomer(12)
  const clientes = await db.selectCustomers();
  console.log(clientes);
})() */


const getClientes = async (req, res) => {
  try {
    const clientes = await db.selectCustomers();
    res.status(200).json(clientes)
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const postCliente = async (req, res) => {
  const { nome, idade, uf } = req.body;
  try {
    await db.insertCustomers({ nome, idade, uf })
    res.status(201).json({ message: 'Cliente criado com sucesso' })
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const deleteCliente = async (req, res) => {
  const { id } = req.params;
  try {
    await db.deleteCustomer(id)
    res.status(200).json({ message: 'Cliente deletado com sucesso' })
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

