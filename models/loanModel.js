'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

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
    return this.belongsToMany(Book);
  }

  users() {
    return this.belongsToMany(User);
  }
}

module.exports = Loan;
