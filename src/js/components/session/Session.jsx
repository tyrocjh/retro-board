import React, { Component } from 'react';

import SessionName from './SessionName'
import SessionBoard from './SessionBoard'

export default class Session extends Component {
	render() {
		return (
			<div>
				<SessionName />
				<SessionBoard />
			</div>
		);
	}
}
