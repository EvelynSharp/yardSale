const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');


router.get('/', (req, res) => {
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query( 'SELECT p.id, p.name, p.price, p.category, pi.imgId, pi.imageurl \
          FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id WHERE prim=1', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      return res.json(result.rows);
      done();
    })
  })
})

router.post('/', (req, res) => {
  let { id, name, price, imageUrls, imgIds } = req.body;
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query('INSERT INTO products VALUES($1, $2, $3);', [id, name, price], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      done();
    })

    imageUrls.forEach( (url, index) => {
      if (url !== '') {
        let prim = index === 0 ? 1 : 0;
        client.query('INSERT INTO productsimages(imgid, product_id, imageUrl, prim) VALUES($1, $2, $3, $4);', [imgIds[index], id, url, prim], (err, result) => {
          if(err) {
            return console.error('error running query', err);
          }
          done();
        })
      };
    })

    client.query( 'SELECT * FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id WHERE prim=1', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      return res.json(result.rows);
      done();
    })

  })
})

module.exports = router;
