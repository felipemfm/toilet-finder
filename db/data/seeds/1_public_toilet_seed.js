/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('locations').insert([
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6658978, lng: 139.7402906},
    {name: 'Ebisu Park Toilet', type: 'publicToilet', lat: 35.6470033, lng: 139.7071389},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6780894, lng: 139.7090927},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6570895, lng: 139.7461259},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6726898, lng: 139.7263254},
    {name: 'Kogai Park Public Toilet', type: 'publicToilet', lat: 35.6564501, lng: 139.7240081},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6490438, lng: 139.7092921},
    {name: 'Hiroo Park Public Toilet', type: 'publicToilet', lat: 35.6480583, lng: 139.7219719},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6481236, lng: 139.7481116},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6571353, lng: 139.7325427},
    {name: 'Mitake Park Public Toilet', type: 'publicToilet', lat: 35.6619581, lng: 139.7030916},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.6436722, lng: 139.713426},
    {name: 'Higashi 3-Chōme Public Toilet', type: 'publicToilet', lat: 35.648952, lng: 139.7091635},
    {name: 'Sendai-zaka Top Public toilet', type: 'publicToilet', lat: 35.6516011, lng: 139.7305383},
    {name: 'Tamachi Station East Public Toilet', type: 'publicToilet', lat: 35.6452262, lng: 139.747919},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.66593, lng: 139.7494363},
    {name: 'Shinshibabashi Side Public Toilet', type: 'publicToilet', lat: 35.6439051, lng: 139.7487341},
    {name: 'Nagasakaue Public Toilet', type: 'publicToilet', lat: 35.6607995, lng: 139.7373505},
    {name: 'Public Toilet', type: 'publicToilet', lat: 35.648186, lng: 139.7033283},
    {name: 'Ichinohashi Bridge Public Toilet', type: 'publicToilet', lat: 35.6555296, lng: 139.7373767},
  ]);
};
