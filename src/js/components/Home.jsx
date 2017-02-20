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
	      <p>{home.data}</p>
			</div>
		)
	}
}
