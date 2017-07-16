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

router.post('/signin', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => { //}{ session: true })
    if (err) {return next(err); }
    return res.json(user);
  })(req,res,next);
});

router.post('/signup', (req,res,next) => {
  let { username, password } = req.body;
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(password, salt);
  pool.connect((err, client, done) => {
    let query = client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, hash]);
    query.on('error', function(err){
      console.log(err);
    });
    // query.on('end', function(){
    //   res.sendStatus(200);
    //   client.end();
    // })

    client.query( 'SELECT username FROM users WHERE username=$1', [ username ], (err, result) => {
      done(err);
      if(err) {
        return console.error('error running query', err);
      }
      return res.json(result.rows[0]);
    })
  })
});

module.exports = router;
