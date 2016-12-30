'use strict';

const knex = require('knex');
const environment = process.env.NODE_ENV;
const config = require('../knexfile');

exports.db = knex(config[environment]);
