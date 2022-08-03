const knex = require('knex');
const knexConfig = require('./knex');

modules.export = knex(knexConfig);