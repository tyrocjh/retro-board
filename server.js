var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 8081);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

const htmlFile = process.env.NODE_ENV === 'production' ?
    path.resolve(__dirname, 'build', 'index.html') :
    path.resolve(__dirname, 'src', 'index.html');

app.get('*', function(req, res) {
  res.sendFile(htmlFile);
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
