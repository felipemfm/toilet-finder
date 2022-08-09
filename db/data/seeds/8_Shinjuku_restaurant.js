/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Starbucks Coffee Shinjuku L Tower', type: 'familyRestaurant', lat: 35.6922806, lng: 139.6974213},
    {name: 'Alice in Fantasy Book', type: 'familyRestaurant', lat: 35.6935823, lng: 139.7026684},
    {name: 'Jurin', type: 'familyRestaurant', lat: 35.690456, lng: 139.694012},
    {name: 'Kyōmachi Koishigure Shinjuku', type: 'familyRestaurant', lat: 35.6911161, lng: 139.7020887},
    {name: 'Izakaya Banya Shinjuku Higashiguchi', type: 'familyRestaurant', lat: 35.6916001, lng: 139.703747},
    {name: 'TRATTORIA Briccola', type: 'familyRestaurant', lat: 35.6918428, lng: 139.7066256},
    {name: 'Kurumaya Bekkan', type: 'familyRestaurant', lat: 35.6928375, lng: 139.7022637},
    {name: 'Bistro COLORIS', type: 'familyRestaurant', lat: 35.69585399999999, lng: 139.697449},
    {name: 'Ginza Lion Beer Hall Shinjuku L Tower', type: 'familyRestaurant', lat: 35.6921045, lng: 139.6972031},
    {name: 'Saizeriya Shinjuku Nishiguchi L Tower', type: 'familyRestaurant', lat: 35.692216, lng: 139.697522},
    {name: 'Soup Stock Tokyo LUMINE Shinjuku', type: 'familyRestaurant', lat: 35.68992139999999, lng: 139.701151},
    {name: 'Tempura Shinjuku Tsunahachi Tsunohazuan', type: 'familyRestaurant', lat: 35.690062, lng: 139.704022},
    {name: 'Goten Sendagaya', type: 'familyRestaurant', lat: 35.6835736, lng: 139.7046374},
    {name: 'Sururi', type: 'familyRestaurant', lat: 35.6943168, lng: 139.7042139},
    {name: 'Y\'s Buffet restaurant', type: 'familyRestaurant', lat: 35.6902759, lng: 139.6958439},
    {name: 'FAR EAST BAZAAR', type: 'familyRestaurant', lat: 35.6892281, lng: 139.6992962},
    {name: 'Shabu Shabu Izakaya Sinjuku Kishuuya', type: 'familyRestaurant', lat: 35.6889645, lng: 139.6986438},
    {name: 'TOKYO STALLS', type: 'familyRestaurant', lat: 35.695044, lng: 139.701267},
    {name: 'Chukachubo Ichibankan', type: 'familyRestaurant', lat: 35.68421310000001, lng: 139.7007904},
    {name: 'Nhà Việt Nam Phở Rice Noodles Shinjuku Takashimaya', type: 'familyRestaurant', lat: 35.6876331, lng: 139.7021008},
  ]);
};
