'use strict';

const express = require('express');
const data = require('./data');
const auth = require('./shared/auth');
const logger = require('./shared/logger');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello product\n');
});
app.get('/products', (req, res) => {
  auth.validateToken(req.query.token, function(authorized){if(!authorized){res.status(401).send({status: "wrong-token"});return; }
  res.send(data.products);
});
});
app.get('/product/:id', (req, res) => {
  auth.validateToken(req.query.token, function(authorized){if(!authorized){res.status(401).send({status: "wrong-token"});return; }
  var prod = data.productById(req.params.id);
  res.send(prod);
});
});

app.listen(PORT, HOST);
logger.log(`Running on http://${HOST}:${PORT}`);
