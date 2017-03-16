import io from 'socket.io-client';
import { JOIN_SESSION, REVEIVE_BOARD } from '../constants/ActionTypes';

let socket = null;

export const init = () => {
	socket = io();

  let actions = [
  	REVEIVE_BOARD,
  ];

  actions.forEach(action => {
  	socket.on(action, data => {
  		console.info(action);
  		console.info(data);
  	});
  });
}

export const socketIoMiddleware = store => next => action => {
  let result = next(action)

  let actions = [
  	JOIN_SESSION,
  ];

  if(actions.indexOf(action.type) > -1) {
  	let state = store.getState();
  	let sessionId = state.session.id;
  	
  	socket.emit(action.type, {
  		sessionId: sessionId
  	});
  }

  return result
}
