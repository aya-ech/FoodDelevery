
const express = require('express');
const { createOrder, getOrders, getOrderById, getOrdersByUserId, updateOrder, deleteOrder } = require('../controllers/OrderController');
const routerOrder = express.Router();


routerOrder.post("/orders", createOrder);

routerOrder.get("/orders", getOrders);

routerOrder.get("/orders/:id", getOrderById);

routerOrder.get("/orders/user/:userId", getOrdersByUserId);

routerOrder.put("/orders/:id", updateOrder);

routerOrder.delete("/orders/:id", deleteOrder);


module.exports = routerOrder;

