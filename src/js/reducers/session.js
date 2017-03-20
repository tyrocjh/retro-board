import { CREATE_SESSION, REVEIVE_SESSION, ADD_POST, REVEIVE_ADD_POST } from '../constants/ActionTypes';

const initialState = {
	id: null,
	name: '',
	posts: [],
	previousSessions: []
}

export default function session(state=initialState, action) {
	switch(action.type) {

		case CREATE_SESSION:
			return Object.assign({}, state, {
				id: action.id
			});

		case REVEIVE_SESSION:
			return Object.assign({}, state, action.payload);

		case ADD_POST:
		case REVEIVE_ADD_POST:
			return Object.assign({}, state, {
				posts: state.posts.concat(action.payload)
			});

		default:
			return state;
	}
}
