import { REQUEST_HOME, RECEIVE_HOME } from '../constants/ActionTypes';

const initialState = {
	isFetching: false,
	data: ''
}

export default function home(state=initialState, action) {
	switch(action.type) {

		case REQUEST_HOME:
			return Object.assign({}, state, {
				isFetching: true
			});

		case RECEIVE_HOME:
			return Object.assign({}, state, {
				isFetching: false,
				data: action.data
			});

		default:
			return state;
	}
}
