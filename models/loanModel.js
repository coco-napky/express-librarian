'use strict';

const { TABLES } = require('../config/tables');
const Bookshelf  = require('../config/bookshelf.config');
const { Model } = Bookshelf;

const User = require('./userModel');
const Book = require('./bookModel');

class Loan extends Model {
  get tableName() {
    return TABLES.LOANS
  }

  get idAttribute() {
    return 'loan_id';
  }

  books() {
    return this.belongsToMany('Book', 'loans', 'loan_id', 'book_id');
  }

  users() {
    return this.belongsToMany('User', 'loans', 'loan_id', 'user_id');
  }
}

module.exports = Bookshelf.model('Loan', Loan);
