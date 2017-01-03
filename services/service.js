'use strict';

class Service {

  constructor(repository) {
    this.repository = repository;
  }

  getModels() {
    return ( new Promise((resolve, reject) => {
      this.repository.getModels()
      .then(data => resolve(data))
      .catch(err => reject(err));
    }));
  }

  getModelById(id) {
    return (new Promise((resolve, reject) => {
      this.repository.getModelById(id)
      .then(data => resolve(data))
      .catch(err => reject(err));
    }));
  }

  postModel(model) {
    return (new Promise((resolve, reject) => {
        this.repository.postModel(model)
        .then(data => resolve(data))
        .catch(err => reject(err));
    }));
  }

  deleteModel(id) {
    return (new Promise((resolve, reject) => {
      let promise = this.repository.deleteModel(id)
      .catch(err => console.log(err));
      this.repository.deleteModel(id)
      .then(data => resolve(data))
      .catch(err => reject(err));
    }));
  }
}

module.exports = Service;
