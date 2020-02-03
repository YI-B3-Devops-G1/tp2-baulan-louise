'use strict';

const express = require('express');
const { Client } = require('pg');
const redis = require('redis');

const redisClient = redis.createClient({host: 'redis'});
const app = express();

// Initialization for db
const PORT = 8000;
const pg = new Client({ user: "admin", password: "jaimelespates", host: "postgres", database: "db", port: 5432 });

// Initialization of routes
app.get('/', (req, res) => {
  res.send({ "message": "API" });

});
app.get('/status', (req, res) => {
  {
    "status": "OK",
  "postgresUptime": String,
  "redisConnectedClients": Number
  }
});

// Connection to db
pg.connect();
app.listen(PORT);

// Show user that server is running
console.log('Server running on : '+ PORT);
