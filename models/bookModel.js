'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

const User = require('./userModel');
const Loan = require('./loanModel');


class Book extends Model {
  get tableName() {
    return TABLES.BOOKS
  }

  get idAttribute() {
    return 'book_id';
  }

  users() {
    return this.belongsToMany(User).through(Loan);
  }
}

module.exports = Book;
