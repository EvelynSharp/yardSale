require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yardSale');

const pool = require('./schemas/db');

// pool.query('SELECT * FROM products', function(err, res) {
//   if(err) {
//     return console.error('error running query', err);
//   }
//
//   console.log(res.rows);
// });

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, './client/build')));



app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
