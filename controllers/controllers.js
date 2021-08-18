const db = require('../data/db');

const getClientes = async (req, res) => {
  try {
    const clientes = await db.selectCustomers();
    res.status(200).json(clientes)
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const getClientesById = async (req, res) => {
  const { id } = req.params
  try {
    const clientes = await db.selectCustomersById(id);
    if (clientes[0] === undefined)
      return res.status(404).json({ message: "Cliente não encontrado" })

    res.status(200).json(clientes)
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const postCliente = async (req, res) => {
  const { nome, idade, UF } = req.body;
  if (!nome || !idade || !UF)
    return res.status(404).json({ message: 'Falta parâmetros no Body da sua requisição' })

  try {
    await db.insertCustomers({ nome, idade, UF })
    res.status(201).json({ message: 'Cliente criado com sucesso' })
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, UF } = req.body;
  try {
    await db.updateCustomer(id, { nome, idade, UF })
    res.status(200).json({ message: `Cliente com o Id: ${id} e Nome: ${nome} foi alterado` })
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: err })
  }
}

const substituirCliente = async (req, res) => {
  const { id } = req.params;
  const { nome, idade, UF } = req.body;
  if (!id)
    return res.status(404).json({ message: 'Falta o parâmetro ID na URL' })

  if (!nome || !idade || !UF)
    return res.status(404).json({ message: 'Falta parâmetros no Body da sua requisição' })

  try {
    await db.replaceCustomer(id, { nome, idade, UF })
    res.status(200).json({ message: `Cliente com o Id: ${id} foi substituído` })
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

module.exports = {
  getClientes,
  getClientesById,
  postCliente,
  updateCliente,
  substituirCliente,
  deleteCliente
}

