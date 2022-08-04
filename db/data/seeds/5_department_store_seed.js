/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'ヒルズカードカスタマーセンター・ポイントカード', type: 'departmentStore', lat: 35.660556, lng: 139.729168},
    {name: '21 Roppongi Building', type: 'departmentStore', lat: 35.6623083, lng: 139.7315416},
    {name: '㈱レリアン 広尾店（婦人服店）', type: 'departmentStore', lat: 35.6503181, lng: 139.7218521},
  ]);
};
