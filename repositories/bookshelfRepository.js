'use strict';

const Repository  = require('./repository');
const { Model }   = require('../config/bookshelf.config');

class BookshelfRepository extends Repository {

  constructor(model) {
    super(model)
  }

  getModels() {
    return this.model.fetchAll();
  }

  getModelById(id) {
    let attributes = {};
    let model = new this.model();
    attributes[model.idAttribute] = +id;
    return this.model.forge(attributes).fetch();
  }

  postModel(name){
    return this.model.forge({name}).save();
  }

  deleteModel(id) {
    let attributes = {};
    let model = new this.model();
    attributes[model.idAttribute] = +id;
    return this.model.query({where: {attributes}}).destroy();
  }
}

module.exports = BookshelfRepository;
