import React, { Component } from 'react';
import { Navigation, Link, IconButton } from 'react-toolbox';

import InviteButton from './InviteButton';
import DrawerButton from './DrawerButton';

import styles from './Tools.scss';

export default class Tools extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <Navigation type='horizontal' className={styles.tools}>
		  	<span className={styles.user}>user</span>
		  	<InviteButton />
		  	<DrawerButton />
		  </Navigation>
		)
	}
}
