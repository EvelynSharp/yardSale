const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');


router.get('/', (req, res) => {
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query( 'SELECT * FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id WHERE prim=1', (err, result) => {
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

    console.log(imgIds[0])
    client.query('INSERT INTO productsimages (id, product_id, imageurl, prim) VALUES($1, $2, $3, $4);', [imgIds[0], id, imageUrls[0], 1], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      done();
    })

    // imageUrls.forEach( (url, index) => {
    //   let primary = index === 0 ? 1 : 0;
    //   let imgId = uuidv4();
    //   console.log(primary);
    //   console.log(imgId);
    //   client.query('INSERT INTO productsimages(id, product_id, imageUrl, primary) VALUES($1, $2, $3, $4);', [imgId, id, url, primary], (err, result) => {
    //     if(err) {
    //       return console.error('error running query', err);
    //     }
    //     done();
    //   })
    // })

    // client.query( 'SELECT * FROM products p LEFT OUTER JOIN productsimages pi ON p.id=pi.product_id WHERE primary=true', (err, result) => {
    //   if(err) {
    //     return console.error('error running query', err);
    //   }
    //   return res.json(result.rows);
    //   done();
    // })

  })
})

module.exports = router;
