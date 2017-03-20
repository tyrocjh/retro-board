import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Input } from 'react-toolbox';

import Post from './Post';
import styles from './PostColumn.scss';

class PostColumn extends Component {
	constructor(props) {
		super(props);
		this.state = { content: '' };
	}

	handleKeyPress = (type, e) => {
		const { addPost, currentUser } = this.props;
		if(e.charCode === 13) {
			addPost(type, currentUser, this.state.content);
			this.setState({ content: '' });
		}
	}

	renderPost = () => {
	  return this.props.posts.map(post => {
	  	return <Post key={post.id} post={post} />
	  })
	}

	render() {
		const { type, placeholder, icon } = this.props;

		return (
			<div className={classNames(styles.postColumn, styles[type])}>
				<Input type='text' label={placeholder} icon={icon} value={this.state.content}
					onChange={(value) => this.setState({content: value})} onKeyPress={ (e) => this.handleKeyPress(type, e)} />

				{this.renderPost()}
			</div>
		);
	}
}

PostColumn.propTypes = {
  addPost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  currentUser: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default PostColumn;
