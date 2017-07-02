require('dotenv').config();
const pg = require('pg');
//const dbUrl = process.env.DATABASE_URL ? process.env.DATABASE_URL  : 'postgres://localhost:5432/yardSale';
// const client = new pg.Client(dbUrl);
// client.connect();
//
// const query = client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
//   console.log(err ? err.stack : res.rows[0].message)
//   client.end()
// })

const { Pool, Client } = pg;
const pool = new Pool({
  user: process.env.PGUSER,
  host:  process.env.PGHOST,  //TODO:change for web host
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
})


pool.on('error', function (err, client) {
  console.error('idle client error', err.message, err.stack);
});

//export the query method for passing queries to the pool
module.exports.query = function (text, values, callback) {
  return pool.query(text, values, callback);
};

// the pool also supports checking out a client for
// multiple operations, such as a transaction
module.exports.connect = function (callback) {
  return pool.connect(callback);
};
