import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import PostColumn from './PostColumn';
import styles from './SessionBoard.scss';

class SessionBoard extends Component {
	renderPostColumn = postType => {
		const { addPost, currentUser } = this.props;

		return (
			<PostColumn 
				key={postType.type}
				addPost={addPost}
				currentUser={currentUser}
				posts={postType.posts}
				type={postType.type}
				placeholder={postType.placeholder}
				icon={postType.icon} />
		);
	}

	render() {
		const { msg, posts } = this.props;

		const postTypes = [{
			type: 'well',
			placeholder: msg.well,
			icon: 'sentiment_very_satisfied',
			posts: _.filter(posts, { 'postType': 'well' })
		}, {
			type: 'notWell',
			placeholder: msg.notWell,
			icon: 'sentiment_very_dissatisfied',
			posts: _.filter(posts, { 'postType': 'notWell' })
		}, {
			type: 'idea',
			placeholder: msg.idea,
			icon: 'lightbulb_outline',
			posts: _.filter(posts, { 'postType': 'idea' })
		}];

		return (
			<div className={styles.sessionBoard}>
				{ postTypes.map(this.renderPostColumn) }
			</div>
		);
	}
}

SessionBoard.propTypes = {
  addPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired
};

SessionBoard.defaultProps = {
  msg: {
    well: 'What went well?',
    notWell: 'What could be improved?',
    idea: 'A brilliant idea to share?'
  }
};

export default SessionBoard;
