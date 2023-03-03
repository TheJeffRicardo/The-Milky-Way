const express = require('express');
// path
const path = require('path');
// body-parser
const bodyParser = require('body-parser');
// Router
const route = express.Router();
// Models
const {User, Product} = require('../model');
// Create a user instance
const user = new User();
// Product instance
const product = new Product();
// ^/$|/Milky-Way
route.get('^/$|/Milky-Way', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
})
// Getting all users
route.get('/users', (req, res)=>{
    user.fetchUsers(req, res);
});
// Getting a single users
route.get('/user/:id', (req, res)=>{
    user.fetchUser(req, res);
});
// Updating user info
route.put('/user/:id',bodyParser.json(), (req, res)=>{
    user.updateUser(req, res);
});
// Registering a user
route.post('/register', bodyParser.json(), (req, res)=> {
    user.createUser(req, res);
});
// Deleting a user
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// Getting all products
route.get('/products', (req, res)=> {
    product.fetchProducts(req, res);
})
// Getting a single product
route.get('/product/:id', 
(req, res)=> {
    product.fetchProduct(req, res);
})
// Adding a new product
route.post('/product', 
bodyParser.json(), 
(req, res)=> {
    product.addProduct(req, res);
})
// Updating a single product
route.put('/product/:id', 
bodyParser.json(),
(req, res)=> {
    product.updateProduct(req, res);
})
// Deleting a single product
route.delete('/product/:id', 
(req, res)=> {
    product.deleteProduct(req, res);
})

module.exports = route;
