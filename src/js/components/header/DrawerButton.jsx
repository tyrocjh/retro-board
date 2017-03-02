import React, { Component } from 'react';
import { IconButton, Button, Drawer, Switch, List, ListSubHeader, ListItem } from 'react-toolbox';

import LanguagePicker from '../LanguagePicker';

import styles from './Drawer.scss';

export default class DrawerButton extends Component {
	constructor(props) {
		super(props);
		this.state = { active: false, switch: false };
	}
  
  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

	render() {
		return(
			<span>
				<IconButton icon='dehaze' inverse onClick={this.handleToggle} />
	      <Drawer
	      	className={styles.drawer}
	      	type='right'
	      	active={this.state.active} 
	      	onOverlayClick={this.handleToggle}>

	        <LanguagePicker />

	        <Switch
	          checked={this.state.switch}
	          label="Summary Mode"
	          onChange={() => this.setState({switch: !this.state.switch})} />

				  <List selectable ripple>
				    <ListSubHeader caption='Kindly joining us right now:' />
				    <ListItem
				      avatar='https://www.gravatar.com/avatar/8b307349bf44ef4fdf2d668b5d2cc0d6?d=retro'
				      caption='tyro'
				      rightIcon='perm_identity' />
				  </List>

				  <Button icon='exit_to_app' label='LEAVE' accent />
				  <Button icon='power_settings_new' label='LOGOUT' accent />
	      </Drawer>
	    </span>
		);
	}
}
