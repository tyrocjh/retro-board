import React, { Component } from 'react';
import { Navigation, Link } from 'react-toolbox';

import styles from './Tools.scss';

export default class Tools extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		  <Navigation type='horizontal' className={styles.tools}>
		    <Link href='/' label='user' className={styles.user} />
		    <Link href='/' icon='group_add' />
		    <Link href='/' icon='dehaze' />
		  </Navigation>
		)
	}
}
