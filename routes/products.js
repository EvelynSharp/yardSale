const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');

router.get('/', (req, res) => {
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query( 'SELECT * FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      console.log(result.rows)
      return res.json(result.rows);
      done();
    })
  })
})

router.post('/', (req, res) => {
  let { id, name, price } = req.body;
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query('INSERT INTO products(id, name, price) VALUES($1, $2, $3);', [id, name, price], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      done();
    })
    client.query( 'SELECT * FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      return res.json(result.rows);
      done();
    })

  })
})

module.exports = router;
