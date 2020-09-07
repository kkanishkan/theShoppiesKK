require('dotenv').config({ path: '.env.local'});

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
var request = require('request');

const apiKey = "c5783123";

const app = express();
app.use(bodyParser.json());
app.use(cors());

// test get
app.get('/test', function(req, res) {
    res.send('hello world')
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);