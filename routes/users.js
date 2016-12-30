'use strict';

const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');

router.get('/:id?', (req, res, next) => {
  let { id } = req.params;

  if(!id)
    return next();

  UserService.getUserById(id)
  .then(data => res.json(data))
  .catch(error => res.send(error));

}, (req, res, next) => {
  UserService.getUsers()
  .then(data =>  res.json(data))
  .catch(error => res.json(error));
});

router.post('/', (req, res, next) => {
  let { username } = req.body;

  UserService.postUser(username)
  .then(response => res.json(response))
  .catch(error => res.json(error));
});

router.delete('/', (req, res, next) => {
  let { id } = req.body;

  UserService.deleteUser(id)
  .then(response => res.json(response))
  .catch(error => res.json(error));
});

module.exports = router;
