import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import SessionContainer from './containers/SessionContainer';
import NotFound from './components/NotFound';

import 'react-toolbox/lib/commons';

const store = configureStore();

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					<Route path="/" component={LayoutContainer}>
						<IndexRoute component={HomeContainer} />
						<Route path="login" component={LoginContainer} />
						<Route path="session/:id" component={SessionContainer} />
					</Route>
					<Route path="*" component={NotFound} status={404} />
				</Router>
			</Provider>
		)
	}
}
