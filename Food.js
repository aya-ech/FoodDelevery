const mongoose = require('mongoose');

const FoodSchema = mongoose.Schema(
    {
        name:{
            type : String,
            required : true
        },
        desc:{
            type : String,
            required : true
        },
        price:{
            type : Number,
            required : true ,
            default : 0
        },
        category: {
            type: String,
            enum: [ 'Salad','Sandwich','Pizza','Noodles','Pasta','Drinks','Deserts'], 
            required: true
        },
        image:{
            type : String,
            required : false
        },
    },
    {
        Timestamp : true
    } 
);
    const Food = mongoose.model('Food', FoodSchema);

    module.exports = Food;