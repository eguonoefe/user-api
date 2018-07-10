'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = 8080 || ENV['PORT'];

app.get('/', function (req, res) {
  res.send('working');
});

app.listen(port, function () {
  console.log('Running on port', port);
});