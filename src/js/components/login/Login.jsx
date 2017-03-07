import React, { Component } from 'react';
import { Input, Button } from 'react-toolbox';

import LanguagePicker from '../LanguagePicker';
import styles from './Login.scss';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { username: '', email: '', password: '' };
	}

  handleChange = (name, value) => {
    this.setState({ [name]: value });
  }

	render() {
		return (
			<div className={styles.login}>
				<LanguagePicker />

				<Input type='text' label='username' icon='person' value={this.state.username} 
					onChange={this.handleChange.bind(this, 'username')} />
				<Input type='email' label='email' icon='email' value={this.state.email} 
					onChange={this.handleChange.bind(this, 'email')} />
				<Input type='password' label='password' icon='lock_outline' value={this.state.password} 
					onChange={this.handleChange.bind(this, 'password')} />

				<Button label={`LET'S START`} accent raised />
			</div>
		);
	}
}
