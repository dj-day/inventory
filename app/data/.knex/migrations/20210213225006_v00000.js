
exports.up = async function(knex) {

    await knex.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
    return knex.raw(
        'CREATE TABLE IF NOT EXISTS inventory (' +
        '   id UUID NOT NULL PRIMARY KEY, ' +
        '   name TEXT NOT NULL, ' +
        '   date_created TIMESTAMPTZ NOT NULL' +
        ' ); '
    );
};

exports.down = async function(knex) {
  await knex.raw('DROP TABLE inventory');
  return knex;
};
