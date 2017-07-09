const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');
const passport = require('passport');
const bcrypt = require('bcrypt');
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
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  pool.connect((err, client) => {
    let query = client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [email, hash]);
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
