const GET_INVENTORY = 'SELECT * FROM inventory';
const CREATE_INVENTORY = 'INSERT INTO inventory(id, name, date_created) VALUES (uuid_generate_v4(), $1::text, CURRENT_TIMESTAMP)';

exports.GET_INVENTORY = GET_INVENTORY;
exports.CREATE_INVENTORY = CREATE_INVENTORY;