const express = require('express')
const Address = require('../models/Address')

exports.createAddress = async (req,res) => {
    const newAddress = new Address (req.body) 
    try{
        const savedAddress = await newAddress.save();
        return res.status(201).json(savedAddress);
    }catch (err){
        return res.status(400).json({error : err.message});
    }
};

exports.getAddresses = async (req,res) => {
    try{
        const addresses = await Address.find().populate('user');
        return res.status(200).json(addresses);
    }catch(err){
        res.status(400).json({erros:err.message});
    };
};

exports.getAddressById = async (req,res) => {
    try{
        const address = await Address.findById(req.params.id).populate('user');
        if (!address) {
            return res.status(404).json({ error : "Address not found"});
        }
            return res.status(200).json(address);
    }catch(err){
        return res.status(400).json({error:err.message});
    };
      
};

exports.updateAddress = async (req, res) => {
    try {
        const updatedAddress = await Address.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedAddress) {
            return res.status(404).json({ error: "Address not found" });
        }
        res.status(200).json(updatedAddress);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


exports.deleteAddress = async (req, res) => {
    try {
        const deletedAddress = await Address.findByIdAndDelete(req.params.id);
        if (!deletedAddress) {
            return res.status(404).json({ error: "Address not found" });
        }
        res.status(200).json({ message: "Address deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAddressesByUser = async (req, res) => {
    console.log('getAddressesByUser route hit'); 
    try {
        const addresses = await Address.find({ user: req.params.userId }).populate('user');
        if (addresses.length === 0) {
            return res.status(404).json({ error: "No addresses found for this user" });
        }
        return res.status(200).json(addresses);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};