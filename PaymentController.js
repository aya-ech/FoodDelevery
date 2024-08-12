const Payment = require('../models/Payment');


exports.createPayment = async (req, res) => {
    const newPayment = new Payment(req.body);
    try {
        const savedPayment = await newPayment.save();
        return res.status(201).json(savedPayment);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};


exports.getPayments = async (req, res) => {
    try {
        const payments = await Payment.find().populate('order');
        return res.status(200).json(payments);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};


exports.getPaymentById = async (req, res) => {
    try {
        const payment = await Payment.findById(req.params.id).populate('order');
        if (!payment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        return res.status(200).json(payment);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};


exports.updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedPayment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        return res.status(200).json(updatedPayment);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};


exports.deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) {
            return res.status(404).json({ error: 'Payment not found' });
        }
        return res.status(200).json({ message: 'Payment deleted successfully' });
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
