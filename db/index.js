const knex = require('knex');
const knexConfig = require('./knexfile');

modules.export = knex(knexConfig);

