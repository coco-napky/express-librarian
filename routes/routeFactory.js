'use strict';

const express = require('express');

const routeFactory = service => {

  let router = express.Router();

  router.get('/', (req, res, next) => {
    service.getModels()
    .then(data =>  res.json(data))
    .catch(error => res.json(error));
  }).get('/:id' ,(req, res, next) => {
    let { id } = req.params;
    service.getModelById(id)
    .then(data => res.json(data))
    .catch(error => res.send(error));
  })
  .post('/', (req, res, next) => {
    let { model } = req.body;

    service.postModel(model)
    .then(response => res.json(response))
    .catch(error => res.json(error));
  })
  .delete('/', (req, res, next) => {
    let { id } = req.body;
    console.log('id is ',id);
    service.deleteModel(id)
    .then(response => res.json(response))
    .catch(error => res.json(error));
  });

  return router;
}

module.exports = routeFactory;
