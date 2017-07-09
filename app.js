require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yardSale');
const pool = require('./schemas/db');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const authHelpers = require('./_helpers');

const app = express();

const auth = require('./routes/auth');

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


//SETUP EXPRESS SESSION
app.use(require('express-session')({
 secret: process.env.SESSION_SECRET || 'secret',
 resave: false,
 saveUninitialized: false,
 cookie: {
   maxAge: 60000,
   httpOnly: false,
   secure: false
 }
}));


//SETUP PASSPORT
app.use(passport.initialize());
app.use(passport.session());

passport.use('local', new LocalStrategy({
         passReqToCallback : true,
         usernameField: 'username'
     },
  function(req, username, password, done){
    //console.log('called local');
      pool.connect( function (err, client) {
        //console.log('called local - pg');
        let user = {};
        let query = client.query("SELECT * FROM users WHERE username = $1", [username]);
        query.on('row', function (row) {
          //console.log('User obj', row);
          //console.log('Password', password)
          user = row;
          if(authHelpers.comparePass(password, user.password)){
            //console.log('match!')
            done(null, user);
          } else {
            done(null, false, { message: 'Incorrect username and password.' });
          }

        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
}));

  passport.serializeUser(function(user, done) {
       done(null, user.id);
    });

passport.deserializeUser(function(id, done) {
  console.log('called deserializeUser');
  pool.connect( function (err, client) {
    let user = {};
    console.log('called deserializeUser - pg');
      let query = client.query("SELECT * FROM users WHERE id = $1", [id]);
      query.on('row', function (row) {
        console.log('User row', row);
        user = row;
        done(null, user);
      });
      // After all data is returned, close connection and return results
      query.on('end', function () {
          client.end();
      });
      // Handle Errors
      if (err) {
          console.log(err);
      }
  });

});

app.use('/api/auth', auth);

app.use('/api/products', products);

app.use('/api/product', proddetails);

app.use('/api/messages', messages);

//cloudinary routes
app.use('/api/cloudinarys', cloudinarys);

app.get('*', (request, response) => {
   response.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

module.exports = app;
