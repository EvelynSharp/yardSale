require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yardSale');

const app = express();

const products = require('./routes/products');

const proddetails = require('./routes/proddetails');

const messages = require('./routes/messages');

//cloudinary
const cloudinarys = require('./routes/cloudinarys');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/api/products', products);

app.use('/api/product', proddetails);

app.use('/api/messages', messages);

//cloudinary routes
app.use('/api/cloudinarys', cloudinarys);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
