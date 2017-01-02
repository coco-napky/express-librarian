'use strict';

const routeFactory = require('./routeFactory');

const Model = require('../models/bookModel');
const Service = require('../services/service');
const BookRepository = require('../repositories/bookRepository');

let service = new Service(new BookRepository(Model));
let router = routeFactory(service);

module.exports = router;
