'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

class User extends Model {
  get tableName() {
    return TABLES.USERS
  }

  get idAttribute() {
    return 'user_id';
  }
}

module.exports = User;
