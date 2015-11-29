var path = require('path');
var express = require('express');
var app = express();
app.use(express.static(path.join(__dirname, '..', 'css')));
app.use(express.static(path.join(__dirname, '..', 'img')));
app.use(express.static(path.join(__dirname, '..', '..', 'vendor')));
app.use(express.static(path.join(__dirname, '..', '..', 'public')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.listen(process.env.PORT || 3000);
