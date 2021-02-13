const Database = require('pg').Pool;

const connection = new Database({
    user: process.env.USER || 'inv',
    host: process.env.HOST || 'localhost',
    database: process.env.DATABASE || 'inventory',
    password: process.env.PASSWORD || 'password12345',
    port: process.env.PORT || 5432,
  });

  module.exports = {
    query: (text, params, callback) => {
      return connection.query(text, params, callback)
    },
  }