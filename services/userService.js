'use strict';

const UserRepository = require('../repositories/userRepository');
const Response = require('../response');
let UserService = {};

UserService.getUsers = () => (new Promise((resolve, reject) => {
  UserRepository.getUsers()
  .then(data => resolve(new Response(200, "Successfully retrived users", data)))
  .catch(err => reject(new Response(500, "Error retrieving users", err)));
}));

UserService.getUserById = id => (new Promise((resolve, reject) => {
  UserRepository.getUserById(id)
  .then(data => resolve(new Response(200, "Successfully retrieved user", data)))
  .catch(err => reject(new Response(500, `Error retrieving user ${id}`, err)));
}));

UserService.postUser = (username) => (new Promise((resolve, reject) => {
  if(!username)
    return reject(new Response(400, 'Invalid username'));

  UserRepository.postUser(username)
  .then(data => resolve(new Response(200, `Successfully created user ${username}`, data)))
  .catch(err => reject(new Response(500, `Error deleting ${username}`, err)));
}));

UserService.deleteUser = (id) => (new Promise((resolve, reject) => {
  if(!id)
    return reject(new Response(400, 'Invalid id'));

  UserRepository.deleteUser(id)
  .then(data => resolve(new Response(200, 'Delete Successful', data)))
  .catch(err => reject(new Response(500, `Error Deleting ${id}`, err)));
}));

module.exports = UserService;
