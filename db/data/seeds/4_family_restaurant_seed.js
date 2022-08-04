/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Saizeriya Roppongi', type: 'familyRestaurant', lat: 35.662263, lng: 139.729633},
    {name: 'ジョナサン 神谷町店', type: 'familyRestaurant', lat: 35.6638487, lng: 139.7456505},
    {name: 'Denny\'s Minami Aoyama Branch', type: 'familyRestaurant', lat: 35.6675159, lng: 139.7245111},
    {name: 'ガスト 六本木店（から好し取扱店）', type: 'familyRestaurant', lat: 35.6623848, lng: 139.7334892},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.64432, lng: 139.733956},
    {name: 'ガスト 麻布十番店（から好し取扱店）', type: 'familyRestaurant', lat: 35.655463, lng: 139.735639},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.672725, lng: 139.7376},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.6765866, lng: 139.7378315},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.6475445, lng: 139.7447349},
    {name: 'バーミヤン 神宮前店', type: 'familyRestaurant', lat: 35.665277, lng: 139.7033098},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.646144, lng: 139.7111493},
    {name: 'ガスト 赤坂見附店（から好し取扱店）', type: 'familyRestaurant', lat: 35.6769214, lng: 139.7364228},
    {name: 'ジョナサン 芝公園店', type: 'familyRestaurant', lat: 35.6533491, lng: 139.7511962},
    {name: 'ガスト 三田慶応大学前店（から好し取扱店）', type: 'familyRestaurant', lat: 35.6479358, lng: 139.7448653},
    {name: 'Saizeriya', type: 'familyRestaurant', lat: 35.641906, lng: 139.747409},
    {name: 'Mi Familia', type: 'familyRestaurant', lat: 35.6622221, lng: 139.746524},
  ]);
};
