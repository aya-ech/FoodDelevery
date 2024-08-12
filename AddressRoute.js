
const express = require('express');
const { createAddress, getAddresses, getAddressById, updateAddress, deleteAddress, getAddressesByUser } = require('../controllers/AddressController');
const routerAddress = express.Router();


routerAddress.post("/addresses", createAddress);

routerAddress.get("/addresses", getAddresses);

routerAddress.get("/addresses/:id", getAddressById);

routerAddress.get("/addresses/user/:userId", getAddressesByUser);

routerAddress.put("/addresses/:id", updateAddress);

routerAddress.delete("/addresses/:id", deleteAddress);


module.exports = routerAddress;

