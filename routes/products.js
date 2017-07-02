const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');

router.get('/', (req, res) => {
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query( 'SELECT * FROM products', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows)
      return res.json(result.rows);
      done();
    })
  })
})


module.exports = router;
