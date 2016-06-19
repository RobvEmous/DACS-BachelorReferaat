var express = require('express');
var os = require("os");

var app = express();
var hostname = os.hostname();
var c = 0;
var tt = 0;

app.get('/', function (req, res) {
	var start = new Date().getTime()
	var r = 1.01;
	for (var i = 0; i < 10000; i++) {
		r = Math.pow(r,100);
		r = 1.01 + (r - Math.floor(res)) / 10;
	}
	c = c + 1;
	tt += new Date().getTime() - start 
  res.send('<html><body>Hello from Node.js container ' + hostname + ' | Request count = ' + c + ' | Avg calc time = ' + (tt / c) + ' ms</body></html>');
});

app.listen(80);
console.log('Running on http://localhost');