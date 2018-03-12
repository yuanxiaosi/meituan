var express = require('express');
var app = express();


app.set('views', './src/template');

app.engine('.html', require('ejs').__express);
app.set('view engine', 'html'); 
app.use(express.static('./src/build/', {
  setHeaders: function(res, path, stat){
    res.setHeader("Cache-Control", 'max-age=100');
    res.setHeader("Expires", '100');
  }
}));


app.all('*', function(req, res, next){
  res.setHeader("Cache-Control", 'max-age=100');
  res.setHeader("Expires", '100');
  next()
})

app.get('/', function (req, res) {
  res.render('app', { title: '首页'});
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});