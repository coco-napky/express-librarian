'use strict';

const Bookshelf = require('../config/bookshelf.config');
const { TABLES } = require('../config/tables');

const User = Bookshelf.Model.extend({
  tableName: TABLES.USERS
});

module.exports = User;
