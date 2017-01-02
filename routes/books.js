'use strict';

const routeFactory = require('./routeFactory');

const Model = require('../models/bookModel');
const Service = require('../services/service');
const BookshelfRepository = require('../repositories/bookshelfRepository');

let service = new Service(new BookshelfRepository(Model));
let router = routeFactory(service);

module.exports = router;
