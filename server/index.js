var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var actionTypes = require('./actionTypes');

app.set('port', process.env.PORT || 8081);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'build')));

const htmlFile = process.env.NODE_ENV === 'production' ?
    path.resolve(__dirname, '../build', 'index.html') :
    path.resolve(__dirname, '../src', 'index.html');

app.get('/*', function(req, res) {
  res.sendFile(htmlFile);
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(err.status || 500);
  res.send({ message: err.message });
});

const joinSession = (socket, data) => {
  socket.join(data.sessionId, () => {
    socket.broadcast.to(data.sessionId).emit(actionTypes.REVEIVE_BOARD, 'blablabla...')
  });
}

const actions = [
	{ type: actionTypes.JOIN_SESSION, handler: joinSession }
]

io.on('connection', function(socket){

  actions.forEach(action => {
  	socket.on(action.type, data => {
  		action.handler(socket, data);
  	});
  });

});

http.listen(app.get('port'), () => {
	console.log('Express server listening on port ' + app.get('port'));
});
