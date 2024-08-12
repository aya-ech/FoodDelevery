const FoodControllers = require('../controllers/FoodController')
const express = require('express');
const routerFood = express.Router();


routerFood.post("/foods", FoodControllers.createFood);

routerFood.get("/foods", FoodControllers.getFoods);

routerFood.get("/foods/:id", FoodControllers.getFoodById);

routerFood.put("/foods/:id", FoodControllers.updateFood);

routerFood.delete("/foods/:id", FoodControllers.deleteFood);
module.exports = routerFood;
