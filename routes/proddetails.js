const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query( 'SELECT pi.imgid \
        ,pi.product_id \
        ,pi.imageurl \
        ,pi.prim \
        ,p.id \
        ,p.name \
        ,p.price \
        ,p.category \
      FROM productsimages pi \
      JOIN products p \
        ON p.id=pi.product_id \
      WHERE pi.product_id=$1;', [req.params.id], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      return res.json(result.rows);
      done();
    })
  })
})

module.exports = router;
