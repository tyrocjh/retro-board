import React, { Component } from 'react';
import { Input, FontIcon } from 'react-toolbox';

import styles from './sessionName.scss';

export default class SessionName extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.sessionName}>
				<span>My Retrospective</span>
				<FontIcon className={styles.icon} value='create' />
			</div>
		);
	}
}
