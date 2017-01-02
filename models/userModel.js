'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

const Book = require('./bookModel');
const Loan = require('./loanModel');

class User extends Model {
  get tableName() {
    return TABLES.USERS
  }

  get idAttribute() {
    return 'user_id';
  }

  books() {
    return this.belongsToMany(Book).through(Loan);
  }
}

module.exports = User;
