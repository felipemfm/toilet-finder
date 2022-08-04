/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = async function(knex) {
    await knex.schema.alterTable('locations', (table) => {
        table.dropColumn('lat');
        table.dropColumn('lng');
    })
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
