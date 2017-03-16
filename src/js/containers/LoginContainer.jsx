import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../components/login/Login';
import { login } from '../actions/user';

class LoginContainer extends Component {
  render() {
    return (
      <Login {...this.props} />
    )
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	onLogin: user => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
