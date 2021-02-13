const Database = require('pg').Pool;

const connection = new Database({
    connectionString: process.env.DATABASE_URL || 'postgresql://inv:password12345@localhost:5432/inventory'
  });

  module.exports = {
    query: (text, params, callback) => {
      return connection.query(text, params, callback)
    },
  }