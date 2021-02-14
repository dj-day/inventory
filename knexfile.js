// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://inv:password12345@localhost:5432/inventory',
  },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
