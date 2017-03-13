import React, { Component } from 'react';
import { Card, CardMedia, CardText, Tab, Tabs, Button, List, ListItem, Link } from 'react-toolbox';
import 'flag-icon-css/css/flag-icon.min.css';

import Banner from './draw/Banner';
import LanguagePicker from './LanguagePicker';
import { fetchHome } from '../actions/home';

import styles from './Home.scss';

export default class Home extends Component {
	static propTypes = {
	  home: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = { tabIndex: 0 };
		const { dispatch } = this.props;
		dispatch(fetchHome());
	}

	renderCreateTab() {
		return (
			<Tab label='CREATE' key="create">
				<h4>Welcome to Retrospected</h4>
				<p style={ { margin: '0.5rem 0 1rem' } }>Click below and start retrospecting:</p>
				<Button label='Create a new session' accent raised />
			</Tab>
		);
	}

	renderPreviousTab() {
		return (
			<Tab label='PREVIOUS' key="previous">
			  <List selectable>
			    <ListItem
			      avatar='https://www.gravatar.com/avatar/113f66131411897947a3eecd72c616a6?d=identicon'
			      caption='my test 1'
			      legend="a few seconds ago"
			      rightIcon='open_in_new' />
			    <ListItem
			      avatar='https://www.gravatar.com/avatar/113f66131411897947a3eecd72c616a6?d=identicon'
			      caption='my test 2'
			      legend='a day ago'
			      rightIcon='open_in_new' />
			    <ListItem
			      avatar='https://www.gravatar.com/avatar/113f66131411897947a3eecd72c616a6?d=identicon'
			      caption='my test 3'
			      legend='5 days ago'
			      rightIcon='open_in_new' />
			  </List>
			</Tab>
		);
	}

	renderAdvancedTab() {
		return (
			<Tab label='ADVANCED' key="advanced">
				<div style={ { maxWidth: '18rem' } }>
					<LanguagePicker />
					<Button icon='power_settings_new' label='LOGOUT' accent />
	      </div>
			</Tab>
		);
	}

	renderTabs() {
		return [
			this.renderCreateTab(),
			this.renderPreviousTab(),
			this.renderAdvancedTab()
		];
	}

	render() {
		const { home } = this.props;

		return (
			<div className={styles.content}>
				<div style={ { padding: '20px' } }>
				  <Card raised style={ { overflow: 'visible' } }>
				    <CardMedia>
				    	<Banner />
				    </CardMedia>

				    <CardText>
				    	{ home.data }
				      <Tabs index={this.state.tabIndex} onChange={tabIndex => this.setState({ tabIndex })}>
				      	{ this.renderTabs() }
				      </Tabs>
				    </CardText>
				  </Card>
				</div>
			</div>
		)
	}
}
