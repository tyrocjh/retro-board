import React, { Component, PropTypes } from 'react';
import { Button, Card, CardText, CardActions } from 'react-toolbox';

class Post extends Component {
	render() {
		const { post } = this.props;
		
		return (
		  <Card raised>
		    <CardText>{post.content}</CardText>
		    <CardActions>
		      <Button label="DELETE" icon="delete_forever" accent raised />
		    </CardActions>
		  </Card>
		);
	}
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
