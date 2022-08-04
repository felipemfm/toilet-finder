/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Tokyo Prince Hotel', type: 'lodging', lat: 35.658962, lng: 139.7481391},
    {name: 'Hotel Gracery Tamachi', type: 'lodging', lat: 35.6437378, lng: 139.750946},
    {name: 'Akasaka Yoko Hotel', type: 'lodging', lat: 35.6694371, lng: 139.7330703},
    {name: 'Tokyo Grand Hotel', type: 'lodging', lat: 35.6528995, lng: 139.7511944},
    {name: 'Shiba Park Hotel', type: 'lodging', lat: 35.6588223, lng: 139.7519791},
    {name: 'InterContinental - ANA Tokyo, an IHG Hotel', type: 'lodging', lat: 35.6682896, lng: 139.7408307},
    {name: 'APA Hotel Nishiazabu', type: 'lodging', lat: 35.6570696, lng: 139.7235125},
    {name: 'Hotel Mystays Premier Akasaka', type: 'lodging', lat: 35.67012510000001, lng: 139.7383884},
    {name: 'Hotel Mets Shibuya', type: 'lodging', lat: 35.6557695, lng: 139.7039304},
    {name: 'Grand Hyatt Tokyo', type: 'lodging', lat: 35.6598051, lng: 139.7284173},
    {name: 'The Ritz-Carlton', type: 'lodging', lat: 35.66612009999999, lng: 139.7312888},
    {name: 'Hotel Arca Torre Roppongi', type: 'lodging', lat: 35.6626815, lng: 139.7316981},
    {name: 'Hotel Roppongi', type: 'lodging', lat: 35.6626199, lng: 139.7279661}
  ]);
};
