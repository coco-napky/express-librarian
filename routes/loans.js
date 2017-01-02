'use strict';

const routeFactory = require('./routeFactory');

const Model = require('../models/loanModel');
const Service = require('../services/service');
const LoanRepository = require('../repositories/loanRepository');

let service = new Service(new LoanRepository(Model));
let router = routeFactory(service);

module.exports = router;
