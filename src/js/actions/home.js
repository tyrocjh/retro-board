import { REQUEST_HOME, RECEIVE_HOME } from '../constants/ActionTypes';

function requestHome() {
	return {
		type: REQUEST_HOME
	}
}

function receiveHome(json) {
	return {
		type: RECEIVE_HOME,
		data: json.data
	}
}

export function fetchHome() {
	return dispatch => {
		dispatch(requestHome());

		return (
			dispatch(receiveHome({ data: 'mock data.' }))
			// fetch('/api/blablabla')
			// 	.then(response => response.json())
			// 	.then(json => {
			// 		dispatch(receiveHome(json));
			// 	})
		)
	}
}
