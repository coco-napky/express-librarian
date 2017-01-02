'use strict';

const BookshelfRepository = require('./bookshelfRepository');

class UserRepository extends BookshelfRepository {
  constructor(model) {
    super(model);
    this.relationships = {withRelated: ['books','loans']};
  }

  getModels() {
    return this.model.fetchAll(this.relationships);
  }

  getModelById(id) {
    let attributes = {};
    let model = new this.model();
    attributes[model.idAttribute] = +id;
    return this.model.forge(attributes).fetch(this.relationships);
  }

  getBooks() {
    return this.model.books();
  }
}

module.exports = UserRepository;
