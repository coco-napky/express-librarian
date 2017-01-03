'use strict';

const { db } = require('./database');
const Bookshelf = require('bookshelf')(db);
const cascadeDelete = require('bookshelf-cascade-delete');

Bookshelf.plugin('registry');
Bookshelf.plugin(cascadeDelete);

module.exports = Bookshelf;
