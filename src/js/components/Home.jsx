import React, { Component } from 'react';
import { Card, CardMedia, CardText } from 'react-toolbox';

import Banner from './draw/Banner';
import { fetchHome } from '../actions/home';

import styles from './Home.scss';

export default class Home extends Component {
	static propTypes = {
	  home: React.PropTypes.object.isRequired
	}

	constructor(props) {
		super(props);
		const { dispatch } = this.props;
		dispatch(fetchHome());
	}

	render() {
		const { home } = this.props;

		return (
			<div className={styles.content}>
				<div style={ { padding: '20px' } }>
				  <Card raised>
				    <CardMedia>
				    	<Banner />
				    </CardMedia>
				    <CardText>
				    	{home.data}
				    </CardText>
				  </Card>
				</div>
			</div>
		)
	}
}
