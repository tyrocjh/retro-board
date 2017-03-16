import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'react-toolbox/lib/commons';

import { init } from './middlewares/socketio';
import { getUserFromLS } from './utils';
import configureStore from './store/configureStore';
import LayoutContainer from './containers/LayoutContainer';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';
import SessionContainer from './containers/SessionContainer';
import NotFound from './components/NotFound';

const store = configureStore();

const requireLogin = function(nextState, replaceState) {
	if(!getUserFromLS()) {
		var prevPath = nextState.location.pathname;
		replaceState({prevPath: prevPath}, '/login');
	}
}

init();

export default class App extends Component {
	renderRoutes() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={LayoutContainer}>
					<IndexRoute component={HomeContainer} onEnter={requireLogin} />
					<Route path="login" component={LoginContainer} />
					<Route path="session/:sessionId" component={SessionContainer} onEnter={requireLogin} />
				</Route>
				<Route path="*" component={NotFound} status={404} />
			</Router>
		)
	}

	render() {
    let component;

    if (__DEVTOOLS__) {
      const DevTools = require('./components/DevTools').default;
      component = (
        <Provider store={store}>
        	<div>
	          {this.renderRoutes()}
	          <DevTools />
          </div>
        </Provider>
      );
    } else {
      component = (
        <Provider store={store}>
          {this.renderRoutes()}
        </Provider>
      );
    }

    return component;
	}
}
