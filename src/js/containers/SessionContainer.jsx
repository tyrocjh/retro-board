import React, { Component } from 'react';
import { connect } from 'react-redux';

import Session from '../components/session/Session';
import { createSession, joinSession } from '../actions/session';

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
	sessionId: state.session.id,
	sessionName: state.session.name
});

const mapDispatchToProps = dispatch => ({
	onCreateSession: id => dispatch(createSession(id)),
	onAutoJoin: () => dispatch(joinSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);
