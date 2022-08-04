/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.663945, lng: 139.7308598},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6528852, lng: 139.7344177},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.6531123, lng: 139.7358701},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.6593717, lng: 139.7232019},
    {name: 'Ministop', type: 'convenienceStore', lat: 35.6600843, lng: 139.7175193},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6611187, lng: 139.7327254},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.6616207, lng: 139.7231147},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.660652, lng: 139.7270417},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6592306, lng: 139.7237454},
    {name: 'Navy Exchange Mini Mart Gas', type: 'convenienceStore', lat: 35.6623753, lng: 139.7254264},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.654306, lng: 139.722916},
    {name: 'FamilyMart Nishi-Azabu Kasumicho store', type: 'convenienceStore', lat: 35.6617576, lng: 139.7210697},
    {name: 'Lawson Azabujuban 1-chome', type: 'convenienceStore', lat: 35.65631080000001, lng: 139.7361473},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.656624, lng: 139.7362657},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6578014, lng: 139.7184565},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.6548592, lng: 139.7367594},
    {name: '7-Eleven - Tokyo Midtown', type: 'convenienceStore', lat: 35.6655679, lng: 139.7312131},
    {name: 'Daily Yamazaki', type: 'convenienceStore', lat: 35.664244, lng: 139.7348068},
    {name: 'Natural Lawson', type: 'convenienceStore', lat: 35.6666266, lng: 139.7282232},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6632726, lng: 139.732929},
  ]);
};
