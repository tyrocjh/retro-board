import React, { Component } from 'react';
import { AppBar } from 'react-toolbox';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppBar leftIcon='menu' />
		)
	}
}
