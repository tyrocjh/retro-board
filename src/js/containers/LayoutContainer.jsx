import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
  		<div id="app-main">
        {React.cloneElement(this.props.children, { key: location.pathname })}
  		</div>
    )
  }
}
