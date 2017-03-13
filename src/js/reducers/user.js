import { LOGIN, AUTOLOGIN } from '../constants/ActionTypes';

const initialState = {
	username: null
}

export default function user(state=initialState, action) {
	switch(action.type) {

		case LOGIN:
		case AUTOLOGIN:
			return Object.assign({}, state, {
				username: action.user
			});

		default:
			return state;
	}
}
