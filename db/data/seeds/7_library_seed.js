/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'academyhills', type: 'library', lat: 35.6604179, lng: 139.7292647},
    {name: 'Tokyo Metropolitan Central Library', type: 'library', lat: 35.652129, lng: 139.726474},
    {name: 'Azabu Library', type: 'library', lat: 35.6575547, lng: 139.7358637},
    {name: 'Library', type: 'library', lat: 35.6638323, lng: 139.7272958},
    {name: 'JRCCN Library', type: 'library', lat: 35.6535172, lng: 139.7193021},
  ]);
};
