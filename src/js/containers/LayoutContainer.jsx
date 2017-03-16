import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Panel } from 'react-toolbox';

import HeaderContainer from './HeaderContainer';
import { autoLogin } from '../actions/user';

class LayoutContainer extends Component {
  constructor(props) {
    super(props);
    this.props.onAutoLogin();
  }

  // componentDidMount() {
  //   this.props.onAutoLogin(); 
  // }

  render() {
    return (
      <Layout>
        <Panel>
        	<HeaderContainer />
          {React.cloneElement(this.props.children, { key: location.pathname })}
        </Panel>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  onAutoLogin: () => dispatch(autoLogin())
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
