import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './Banner.scss';

export default class Banner extends Component {
	render() {
		return (
			<div className={styles.banner}>
				<div className={styles.cards}>
					<i className={classNames(styles.icon, 'material-icons')}>question_answer</i>
				</div>
				<h2 className={styles.title}>tyro-retroboard</h2>
			</div>
		)
	}
}
