var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mainCtrl = require('./serverAssets/main-ctrl');
var app = express();


// middleware
app.use(bodyParser());

app.use(cors());

app.use(express.static(__dirname + '/public'));

// end-points
app.get('/interest_rate', function (request, response) {

  response.json(mainCtrl.randomNumberGen());

});

app.listen(3001);