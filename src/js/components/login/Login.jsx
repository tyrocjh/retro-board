import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'react-toolbox';
import trim from 'lodash/trim';

import LanguagePicker from '../LanguagePicker';
import styles from './Login.scss';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '' };
	}

	handleRedirect = () => {
		let propState = this.props.location.state;
		let defaultPrevPath = '/admin'
		let prevPath = propState && propState.prevPath;
		this.props.history.replaceState(null, prevPath || defaultPrevPath);
	}

	handleClick = () => {
		let username = trim(this.state.username);
		if(username) {
			this.props.onLogin(username);
			this.handleRedirect();
		}
	}

	render() {
		return (
			<div className={styles.login}>
				<LanguagePicker />

				<Input type='text' icon='person'
					label={this.props.msg.inputLabel} value={this.state.username} 
					onChange={value => this.setState({ username: value })} />

				<Button accent raised label={this.props.msg.buttonLabel}
					onClick={this.handleClick} />
			</div>
		);
	}
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

Login.defaultProps = {
  msg: {
    inputLabel: 'Who are you exactly? Enter your name here',
    buttonLabel: 'Let\'s start'
  }
};

export default Login;
