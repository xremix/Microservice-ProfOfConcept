'use strict';

const express = require('express');
const data = require('./data');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello product\n');
});
app.get('/products', (req, res) => {
  res.send(data.products);
});
app.get('/product/:id', (req, res) => {
  var prod = data.productById(req.params.id);
  res.send(prod);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
