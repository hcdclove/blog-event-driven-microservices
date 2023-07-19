// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
	const { type, data } = req.body;

	if (type === 'CommentCreated') {
		const status = data.content.includes('orange') ? 'rejected' : 'approved';

		await axios.post('http://event-bus-srv:4005/events', {
			type: 'CommentModerated',
			data: {
				id: data.id,
				postId: data.postId,
				status,
				content: data.content
			}
		});
	}

	res.send({});
});

app.listen(4003, () => {
	console.log('Listening on 4003');
});
