/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Wendy\'s First Kitchen Gaienmae', type: 'fastFood', lat: 35.6704886, lng: 139.7171573},
    {name: 'Wendy\'s First Kitchen Roppongi', type: 'fastFood', lat: 35.6632567, lng: 139.7317099},
    {name: 'KFC', type: 'fastFood', lat: 35.6503152, lng: 139.7218523},
    {name: 'Subway', type: 'fastFood', lat: 35.665621, lng: 139.712273},
    {name: 'Lotteria Harajuku Takeshita East', type: 'fastFood', lat: 35.670309, lng: 139.7063677},
    {name: 'Burger King Roppongi', type: 'fastFood', lat: 35.66263, lng: 139.7319976},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.67224119999999, lng: 139.7360999},
    {name: 'GRAB A BITE', type: 'fastFood', lat: 35.6632884, lng: 139.7329703},
    {name: 'BLUE DRAGON', type: 'fastFood', lat: 35.6706318, lng: 139.7262885},
    {name: 'Lotteria', type: 'fastFood', lat: 35.642864, lng: 139.749389},
    {name: 'KFC', type: 'fastFood', lat: 35.6640694, lng: 139.71122},
    {name: 'Minochian', type: 'fastFood', lat: 35.6671056, lng: 139.7399853},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.6609855, lng: 139.7283446},
    {name: 'KFC', type: 'fastFood', lat: 35.6471561, lng: 139.708456},
    {name: 'SHAKE SHACK Gaien', type: 'fastFood', lat: 35.6733487, lng: 139.719852},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.6684838, lng: 139.7151539},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.6467037, lng: 139.7456431},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.655671, lng: 139.736285},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.6470692, lng: 139.7104826},
    {name: 'McDonald\'s', type: 'fastFood', lat: 35.6626927, lng: 139.7089321},
  ]);
};
