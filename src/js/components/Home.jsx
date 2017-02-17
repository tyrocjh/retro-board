import React, { Component } from 'react';

import { fetchHome } from '../actions/home';

import './Home.scss';

export default class Home extends Component {
	static propTypes = {
	  home: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchHome());
	}

	render() {
		const { home } = this.props;

		return (
			<div id="home-page">
				<h1>Home Page.</h1>
	      <p>{home.data}</p>
			</div>
		)
	}
}
