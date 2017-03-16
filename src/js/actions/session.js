import { CREATE_SESSION, JOIN_SESSION } from '../constants/ActionTypes';

export function createSession(id) {
	return {
		type: CREATE_SESSION,
		id
	}
}

export function joinSession(id) {
	return {
		type: JOIN_SESSION,
		id
	}
}
