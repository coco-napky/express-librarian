'use strict';

const UserModel = require('../models/userModel');

let UserRepository = {};

UserRepository.getUsers = () =>  UserModel.fetchAll();

UserRepository.getUserById = id => UserModel.forge({user_id: +id}).fetch()

UserRepository.postUser = username => UserModel.forge({username}).save();

UserRepository.deleteUser = id => UserModel.query({where: {user_id: +id}}).destroy();

module.exports = UserRepository;
