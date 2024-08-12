
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const routerFood = require("./routes/FoodRoute");
const routerRole = require('./routes/RoleRoute');
const routerUser = require('./routes/UserRoute');
const routerAddress = require('./routes/AddressRoute');
const routerOrder = require('./routes/OrderRoute');
const routerPayment = require('./routes/PaymentRoute');


app.get('/' ,(req,res) => {
    res.send("Hello from Node API");
 
});

app.use(express.json());
app.use('/api', routerFood);
app.use('/api', routerRole);
app.use('/api', routerUser);
app.use('/api', routerAddress);
app.use('/api', routerOrder);
app.use('/api', routerPayment);

mongoose.connect(process.env.mongoURI)
.then(() => {
    console.log("Connected to database!")
    app.listen (3000 , () => {
        console.log("Server is running on port 3000"); 
   });
})
.catch(() => {
    console.log("Connection failed!")
})