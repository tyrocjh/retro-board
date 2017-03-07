import React, { Component } from 'react';
import classNames from 'classnames';
import { Input, Button, Card, CardText, CardActions } from 'react-toolbox';

import styles from './SessionBoard.scss';

export default class SessionBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { well: '', notWell: '', ideas: '' };
	}

	renderWellBoard() {
		return (
			<div key="well" className={classNames(styles.sessionBoard, styles.well)}>
				<Input type='text' label='What went well?' icon='sentiment_very_satisfied' value={this.state.well} 
					onChange={(value) => this.setState({well: value})} />

			  <Card raised>
			    <CardText>blablabla...</CardText>
			    <CardActions>
			      <Button label="DELETE" icon="delete_forever" accent raised />
			    </CardActions>
			  </Card>
			</div>
		);
	}

	renderImproveBoard() {
		return (
			<div key="not-well" className={classNames(styles.sessionBoard, styles.notWell)}>
				<Input type='text' label='What could be improved?' icon='sentiment_very_dissatisfied' value={this.state.notWell} 
					onChange={(value) => this.setState({notWell: value})} />

			  <Card raised>
			    <CardText>blablabla...</CardText>
			    <CardActions>
			      <Button label="DELETE" icon="delete_forever" accent raised />
			    </CardActions>
			  </Card>
			</div>
		);
	} 

	renderIdeaBoard() {
		return (
			<div key="ideas" className={classNames(styles.sessionBoard, styles.ideas)}>
				<Input type='text' label='A brilliant idea to share?' icon='lightbulb_outline' value={this.state.ideas} 
					onChange={(value) => this.setState({idea: value})} />

			  <Card raised>
			    <CardText>blablabla...</CardText>
			    <CardActions>
			      <Button label="DELETE" icon="delete_forever" accent raised />
			    </CardActions>
			  </Card>
			</div>
		);
	}

	renderBoards() {
		return [
			this.renderWellBoard(),
			this.renderImproveBoard(),
			this.renderIdeaBoard()
		];
	}

	render() {
		return (
			<div className={styles.sessionBoardContainer}>
				{this.renderBoards()}
			</div>
		);
	}
}
