import { combineReducers } from 'redux';
import user from './user';
import home from './home';
import session from './session';

const rootReducer = combineReducers({
	user,
	home,
	session
});

export default rootReducer;
