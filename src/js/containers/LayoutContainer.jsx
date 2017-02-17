import React, { Component } from 'react';
import { Layout, Panel } from 'react-toolbox';

import Header from '../components/header/Header';

export default class LayoutContainer extends Component {
  render() {
    return (
      <Layout>
        <Panel>
        	<Header />
          {React.cloneElement(this.props.children, { key: location.pathname })}
        </Panel>
      </Layout>
    )
  }
}
