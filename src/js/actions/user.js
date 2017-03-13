import { LOGIN, AUTOLOGIN } from '../constants/ActionTypes';
import { setUserToLS, getUserFromLS } from '../utils';

export function login(user) {
	setUserToLS(user);

	return {
		type: LOGIN,
		user
	}
}

export function autoLogin() {
	let user = getUserFromLS();

	return {
		type: AUTOLOGIN,
		user
	}
}
