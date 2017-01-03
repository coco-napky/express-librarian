'use strict';

const { TABLES } = require('../config/tables');
const Bookshelf  = require('../config/bookshelf.config');
const { Model } = Bookshelf;

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
    return this.belongsToMany('Book').through('Loan', 'user_id', 'book_id');
  }

  loans() {
    return this.hasMany('Loan', 'user_id');
  }
}

User.dependents = ['loans'];

module.exports = Bookshelf.model('User', User);
