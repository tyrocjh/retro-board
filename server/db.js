var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var config = require('./config');

const sessionShema = new mongoose.Schema({
	id: {
		type: String,
		index: { unique: true }
	},
	name: String,
	posts: [{
		id: {
			type: String,
			index: { unique: true }
		},
		user: String,
		postType: String,
		content: String,
		likes: [String],
		dislikes: [String]
	}]
});

const Session = mongoose.model('Session', sessionShema);

const get = () => sessionId => {
}

const set = () => session => {
}

module.exports = () => {
	mongoose.connect(config.database);
	const connection = mongoose.connection;

	return new Promise((resolve) => {
		connection.once('open', () => {
			resolve({
				get: get(),
				set: set()
			});
		});
	});
}
