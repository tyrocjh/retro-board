import { CREATE_SESSION } from '../constants/ActionTypes';

const initialState = {
	id: null,
	name: '',
	previousSessions: []
}

export default function session(state=initialState, action) {
	switch(action.type) {

		case CREATE_SESSION:
			return Object.assign({}, state, {
				id: action.id
			});

		default:
			return state;
	}
}
