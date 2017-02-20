import React, { Component } from 'react';
import { AppBar } from 'react-toolbox';
import { Link } from 'react-router';

import styles from './Header.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppBar className={styles.header}>
				<Link to='/'>
					<h1 className={styles.title}>Retrospected</h1>
					<p className={styles.subTitle}>A good way of ranting in an Agile way</p>
				</Link>
			</AppBar>
		)
	}
}
