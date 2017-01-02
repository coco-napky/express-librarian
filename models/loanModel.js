'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

class Loan extends Model {
  get tableName() {
    return TABLES.BOOKS
  }

  get idAttribute() {
    return 'loan_id';
  }
}

module.exports = Loan;
