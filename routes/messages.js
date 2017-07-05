const express = require('express');
const router = express.Router();
const pool = require('../schemas/db');

router.post('/send', (req, res) => {
  let {ctIssue, ctName, ctEmail, ctPhone, ctMsg} = req.body;
  const uuidv1 = require('uuid/v1');
  let msgId = uuidv1();
  pool.connect( (err, client, done) => {
    if (err) {
      return console.error('err fetching client from pool', err);
    }
    client.query('INSERT INTO messages VALUES($1, $2, $3, $4, $5, $6);', [msgId, ctIssue, ctName, ctEmail, ctPhone, ctMsg], (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      done();
    })

    // client.query( 'SELECT * FROM messages', (err, result) => {
    //   if(err) {
    //     return console.error('error running query', err);
    //   }
    //   return res.json(result.rows);
    //   done();
    // })

  })
})

module.exports = router;
