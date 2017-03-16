import { LOGIN, AUTO_LOGIN } from '../constants/ActionTypes';

const initialState = {
	username: null
}

export default function user(state=initialState, action) {
	switch(action.type) {

		case LOGIN:
		case AUTO_LOGIN:
			return Object.assign({}, state, {
				username: action.user
			});

		default:
			return state;
	}
}
