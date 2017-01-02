'use strict';

const routeFactory = require('./routeFactory');

const Model = require('../models/userModel');
const Service = require('../services/userService');
const UserRepository = require('../repositories/userRepository');

let service = new Service(new UserRepository(Model));
let router = routeFactory(service);

module.exports = router;
