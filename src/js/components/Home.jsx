import React, { Component } from 'react';
import { Card, CardMedia, CardText, Tab, Tabs, Button, List, ListItem, Dropdown } from 'react-toolbox';
import 'flag-icon-css/css/flag-icon.min.css';

import Banner from './draw/Banner';
import { fetchHome } from '../actions/home';

import styles from './Home.scss';

const languageConfig = [
  { value: 'en', iso: 'gb', name: 'English', englishName: 'English' },
  { value: 'cn', iso: 'cn', name: '简体中文', englishName: 'Simplified Chinese' },
  { value: 'mo', iso: 'mo', name: '繁体中文', englishName: 'Traditional Chinese' }
];

const languageTemplate = item => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row'
  };

  const iconStyle = {
    display: 'flex',
    width: '3rem',
    height: '3rem',
    marginRight: '1rem'
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div style={containerStyle}>
      <span style={iconStyle} className={`flag-icon flag-icon-${item.iso}`}></span>
      <div style={contentStyle}>
        <strong>{item.name}</strong>
        <small>{item.englishName}</small>
      </div>
    </div>
  );
};

export default class Home extends Component {
	static propTypes = {
	  home: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		this.state = { tabIndex: 0, languageSelected: 'en' };
		const { dispatch } = this.props;
		dispatch(fetchHome());
	}

	renderTabs() {
		return [
			this.renderCreateTab(),
			this.renderPreviousTab(),
			this.renderAdvancedTab()
		];
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
				<div style={ { 'max-width': '18rem' } }>
	        <Dropdown
	          source={languageConfig}
	          onChange={value => this.setState({ languageSelected: value })}
	          label='Choose a language'
	          template={languageTemplate}
	          value={this.state.languageSelected} />
	        <Button icon='power_settings_new' label='Bookmark' accent />
	      </div>
			</Tab>
		);
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
