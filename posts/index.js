// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/posts', async (req, res) => {
	const id = randomBytes(4).toString('hex');

	console.log('body:' + body);

	const { title } = req.body;

	console.log('Title =  ' + title);

	posts[id] = {
		id,
		title
	};

	console.log('posts =' + posts);

	await axios.post('http://event-bus-srv:4005/events', {
		type: 'PostCreated',
		data: {
			id,
			title
		}
	});

	res.status(201).send(posts[id]);
});

app.post('/events', (req, res) => {
	console.log('Received Event', req.body.type);

	res.send({});
});

app.listen(4000, () => {
	console.log('v55');
	console.log('Listening on 4000');
});
