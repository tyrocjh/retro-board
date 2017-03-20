import React, { Component } from 'react';

import SessionName from './SessionName'
import SessionBoard from './SessionBoard'

export default class Session extends Component {
	render() {
		const { onAddPost, user, posts } = this.props;

		return (
			<div>
				<SessionName />
				<SessionBoard addPost={onAddPost} currentUser={user} posts={posts} />
			</div>
		);
	}
}
