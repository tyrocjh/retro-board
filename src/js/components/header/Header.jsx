import React, { Component } from 'react';
import { AppBar, Link } from 'react-toolbox';

import Tools from './Tools';

import styles from './Header.scss';

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<AppBar className={styles.header}>
				<Link href='/' className={styles.homeLink}>
					<h1 className={styles.title}>Retrospected</h1>
					<p className={styles.subTitle}>A good way of ranting in an Agile way</p>
				</Link>

				<Tools username={this.props.username} />
			</AppBar>
		)
	}
}
