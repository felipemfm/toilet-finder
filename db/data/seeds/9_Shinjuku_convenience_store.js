/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Lawson Nishi-Shinjuku 1-chome', type: 'convenienceStore', lat: 35.68834440000001, lng: 139.6969367},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.6895677, lng: 139.7042751},
    {name: 'Lawson Shinjuku Center Building', type: 'convenienceStore', lat: 35.6915855, lng: 139.6958074},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.689403, lng: 139.7036894},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.692173, lng: 139.7058006},
    {name: 'LAWSON Shinjuku Idaidori', type: 'convenienceStore', lat: 35.69332480000001, lng: 139.70716},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.6852857, lng: 139.6895833},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.6979135, lng: 139.696383},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6884075, lng: 139.7029243},
    {name: 'Lawson Shinjuku Sentabiru West', type: 'convenienceStore', lat: 35.691958, lng: 139.6954205},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6973304, lng: 139.6919324},
    {name: 'Lawson Nishishinjuku otakibashi Street', type: 'convenienceStore', lat: 35.6943706, lng: 139.698652},
    {name: 'LAWSON H Nishishinjuku', type: 'convenienceStore', lat: 35.6899334, lng: 139.6961646},
    {name: 'FamilyMart', type: 'convenienceStore', lat: 35.6819783, lng: 139.7018247},
    {name: '7-Eleven', type: 'convenienceStore', lat: 35.6881721, lng: 139.7032645},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.69044179999999, lng: 139.7086516},
    {name: 'Lawson Three-F', type: 'convenienceStore', lat: 35.6966303, lng: 139.6872281},
    {name: 'FamilyMart Odakyū Dai-ichi Seimei Building', type: 'convenienceStore', lat: 35.6915963, lng: 139.6909017},
    {name: 'FamilyMart Shinjuku Shintoshin', type: 'convenienceStore', lat: 35.6877936, lng: 139.6963183},
    {name: 'Lawson', type: 'convenienceStore', lat: 35.6909392, lng: 139.7143451},      
  ]);
};
