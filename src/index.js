var express = require('express');
var app = express();


app.set('views', './src/template');

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html'); 
app.use(express.static('./src/build/'));


app.get('/', function (req, res) {
  res.render('app', { title: '首页'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});