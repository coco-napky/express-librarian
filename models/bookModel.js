'use strict';

const { TABLES } = require('../config/tables');
const Bookshelf  = require('../config/bookshelf.config');
const { Model } = Bookshelf;

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
    return this.belongsToMany('User').through('Loan', 'book_id', 'user_id');
  }

  loans() {
    return this.hasMany('Loan', 'book_id');
  }
}

module.exports = Bookshelf.model('Book', Book);
