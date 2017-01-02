'use strict';

const BookshelfRepository = require('./bookshelfRepository');

class LoanRepository extends BookshelfRepository {
  constructor(model) {
    super(model);
    this.relationships = {withRelated: ['users','books']};
  }

  getModels() {
    let promise = this.model.fetchAll(this.relationships);

    promise.catch(err => console.log(err));
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

module.exports = LoanRepository;
