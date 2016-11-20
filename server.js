var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'info.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/contact', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'contact.html'));
});

app.get('/work', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'work.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/bgimage1.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bgimage1.png'));
});

var port = 8080;
app.listen(8080, function () {
  console.log(`NodeJS Server listening on port:${port}!`);
});
