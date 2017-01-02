'use strict';

const { TABLES } = require('../config/tables');
const { Model }  = require('../config/bookshelf.config');

class Book extends Model {
  get tableName() {
    return TABLES.BOOKS
  }

  get idAttribute() {
    return 'book_id';
  }
}

module.exports = Book;
