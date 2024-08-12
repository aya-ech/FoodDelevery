const express = require('express');
const { createUser, getAllUsers, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/UserController');
const routerUser = express.Router();


routerUser.post("/users", createUser);

routerUser.get("/users", getUsers );

routerUser.get("/users/:id", getUserById );

routerUser.put("/users/:id", updateUser );

routerUser.delete("/users/:id", deleteUser );
module.exports = routerUser;
