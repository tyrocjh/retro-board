import uuid from 'uuid';
import { CREATE_SESSION, JOIN_SESSION, REVEIVE_SESSION, ADD_POST, REVEIVE_ADD_POST } from '../constants/ActionTypes';

export function createSession(id) {
	return {
		type: CREATE_SESSION,
		id
	}
}

export function joinSession() {
	return {
		type: JOIN_SESSION
	}
}

export function receiveSession(payload) {
	return {
		type: REVEIVE_SESSION,
		payload
	}
}

export function addPost(postType, user, content) {
	return {
		type: ADD_POST,
		payload: {
			id: uuid.v1(),
			user: user,
			postType: postType,
			content: content,
			likes: [],
			dislikes: []
		}
	}
}

export function receiveAddPost(payload) {
	return {
		type: REVEIVE_ADD_POST,
		payload
	}
}
