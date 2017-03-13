import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/header/Header';

class HeaderContainer extends Component {
  render() {
    return (
      <Header username={this.props.username} />
    )
  }
}

const mapStateToProps = state => ({
	username: state.user.username
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
