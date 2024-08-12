const Order = require('../models/Order')

exports.createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    
    try {
        const savedOrder = await newOrder.save();
        return res.status(201).json(savedOrder);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('user', 'name email')
            .populate('foods.food', 'name price');
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

exports.getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('user', 'name email')
            .populate('foods.food', 'name price');
            if (!order){
                return res.status(404).json({ error : "Order not found"})
            }
        return res.status(200).json(order);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

exports.updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })
        .populate('user', 'name email')
        .populate('foods.food', 'name price');
        
        if (!updatedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }
        return res.status(200).json(updatedOrder);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const deletedOrder = await Order.findByIdAndDelete(req.params.id, req.body)
        .populate('user', 'name email')
        .populate('foods.food', 'name price');
        
        if (!deletedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }
        return res.status(200).json(deletedOrder);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

exports.getOrdersByUserId = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.params.userId })
            .populate('user', 'name email')
            .populate('foods.food', 'name price');
        
        if (!orders || orders.length === 0) {
            return res.status(404).json({ error: "No orders found for this user" });
        }
        
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};
