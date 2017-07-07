const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');
const passport = require('passport');
const pg = require('pg');
//const path = require('path');

router.get("/", function(req,res,next){
    // res.sendFile(path.join(__dirname, '../views/index.html'));
  });

router.post('/signin',

   passport.authenticate('local', {
      //  successRedirect: '/users',
      //  failureRedirect: '/'
   })
);

router.post('/signup', (req,res,next) => {
  let { email, password } = req.body;
  pool.connect((err, client) => {
    let query = client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [email, password]);
    query.on('error', function(err){
      console.log(err);
    })
    query.on('end', function(){
      res.sendStatus(200);
      client.end();
    })

  })
});

module.exports = router;
