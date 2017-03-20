import React, { Component } from 'react';
import { connect } from 'react-redux';

import Session from '../components/session/Session';
import { createSession, joinSession, addPost } from '../actions/session';

class SessionContainer extends Component {
  componentDidMount() {
  	this.props.onCreateSession(this.props.params.sessionId);
  	this.props.onAutoJoin();
  }

  render() {
    return (
      <Session {...this.props} />
    )
  }
}

const mapStateToProps = state => ({
  user: state.user.username,
  posts: state.session.posts,
	sessionId: state.session.id,
	sessionName: state.session.name
});

const mapDispatchToProps = dispatch => ({
	onCreateSession: id => dispatch(createSession(id)),
	onAutoJoin: () => dispatch(joinSession()),
  onAddPost: (type, user, content) => dispatch(addPost(type, user, content))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
