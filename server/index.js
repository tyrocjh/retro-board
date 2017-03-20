var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var db = require('./db');
var actionTypes = require('./actionTypes');

db().then(store => {
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

	const persist = session => store.set(session)

	const sendToSelf = (socket, action, payload) => {
		socket.emit(action, payload);
	}

	const sendToAll = (socket, sessionId, action, payload) => {
		socket.broadcast.to(sessionId).emit(action, payload);
	}

	const joinSession = (socket, session, payload) => {
		sendToSelf(socket, actionTypes.REVEIVE_SESSION, session);

	  socket.join(session.id, () => {
	  	// sendToAll();
	  });
	}

	const addPost = (socket, session, payload) => {
		session.posts.push(payload);
		persist(session);
		sendToAll(socket, session.id, actionTypes.REVEIVE_ADD_POST, payload);
	}

	const actions = [
		{ type: actionTypes.JOIN_SESSION, handler: joinSession },
		{ type: actionTypes.ADD_POST, handler: addPost }
	]

	io.on('connection', function(socket){
	  actions.forEach(action => {
	  	socket.on(action.type, data => {
				store.get(data.sessionId).then(session => {
					action.handler(socket, session, data.payload);
				});
	  	});
	  });
	});

	http.listen(app.get('port'), () => {
		console.log('Express server listening on port ' + app.get('port'));
	});

})
