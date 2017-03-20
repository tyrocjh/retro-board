import io from 'socket.io-client';
import { JOIN_SESSION, REVEIVE_SESSION, ADD_POST, REVEIVE_ADD_POST } from '../constants/ActionTypes';

let socket = null;

export const init = store => {
	socket = io();

  let actions = [
  	REVEIVE_SESSION,
    REVEIVE_ADD_POST
  ];

  actions.forEach(action => {
  	socket.on(action, payload => {
      store.dispatch({ type: action, payload });
  	});
  });
}

export const socketIoMiddleware = store => next => action => {
  let result = next(action)

  let actions = [
  	JOIN_SESSION,
    ADD_POST
  ];

  if(actions.indexOf(action.type) > -1) {
  	let state = store.getState();
  	let sessionId = state.session.id;

  	socket.emit(action.type, {
  		sessionId: sessionId,
      payload: action.payload
  	});
  }

  return result
}
