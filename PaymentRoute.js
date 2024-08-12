const express = require('express');
const { createPayment, getPayments, getPaymentById, updatePayment, deletePayment } = require('../controllers/PaymentController');

const routerPayment = express.Router();

routerPayment.post('/payments', createPayment);
routerPayment.get('/payments', getPayments);
routerPayment.get('/payments/:id', getPaymentById);
routerPayment.put('/payments/:id', updatePayment);
routerPayment.delete('/payments/:id', deletePayment);

module.exports = routerPayment;
