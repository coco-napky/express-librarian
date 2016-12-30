'use strict';

const { db } = require('./database');
const Bookshelf = require('bookshelf')(db);

Bookshelf.plugin('registry');

module.exports = Bookshelf;
