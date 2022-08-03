/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema.createTable('locations', (table) => {
        table.increments('id');
        table.string('type', 64).notNullable();
        table.string('name', 64).notNullable();
        table.decimal('lat', 32,2).notNullable();
        table.decimal('lng', 32,2).notNullable();
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knew.schema.dropTable('locations');
};
