'use strict';

const Service = require('./service');

class UserService extends Service {
  constructor(repository) {
    super(repository);
  }
}

module.exports = UserService;
