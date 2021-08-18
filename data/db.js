const connect = async () => {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;

  const mysql = require('mysql2/promise');
  const connection = await mysql.createConnection("mysql://root:@localhost:3306/api_curso");
  console.log("Conectou no SQL!")
  global.connection = connection;
  return connection
}

connect()

const selectCustomers = async () => {
  const conn = await connect();
  const [rows] = await conn.query('SELECT * FROM clientes;');
  return await rows;
}

const insertCustomers = async (customer) => {
  const conn = await connect();
  const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
  const values = [customer.nome, customer.idade, customer.uf]
  await conn.query(sql, values)
}

const updateCustomer = async (id, customer) => {
  const conn = await connect();
  const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? where id=?;';
  const values = [customer.nome, customer.idade, customer.uf, id]
  await conn.query(sql, values);
}

const deleteCustomer = async (id) => {
  const conn = await connect();
  const sql = 'DELETE FROM clientes WHERE id=?;';
  await conn.query(sql, [id]);
}

module.exports = {
  selectCustomers,
  insertCustomers,
  updateCustomer,
  deleteCustomer
}