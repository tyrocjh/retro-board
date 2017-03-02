import React, { Component } from 'react';
import { Button, IconButton, Dialog } from 'react-toolbox';
import CopyToClipboard from 'react-copy-to-clipboard';

import { getCurrentUrl } from '../../utils';

export default class InviteButton extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false };
	}

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  }

	render() {
		return (
			<span>
				<IconButton icon='group_add' inverse onClick={this.handleToggle} />
        <Dialog
          actions={[
				    { label: "OK", onClick: this.handleToggle }
				  ]}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title='Invite people to your retrospective'
        >
          <p style={{ marginBottom: '10px' }}>To invite people to your retrospected session, simply send them the following URL:</p>
          <strong>{getCurrentUrl()}</strong>

          <div style={{ marginTop: '15px' }}>
		        <CopyToClipboard text={getCurrentUrl()}>
		          <Button icon='content_copy' label='Copy URL to Clipboard' accent  />
		        </CopyToClipboard>
          </div>
        </Dialog>
			</span>
		);
	}
}
