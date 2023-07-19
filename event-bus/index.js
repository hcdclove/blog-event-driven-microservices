// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
	const event = req.body;

	events.push(event);

	axios.post('http://posts-clusterip-srv:4000/events', event).catch((err) => {
		console.log(err);
	});

	axios.post('http://comments-srv:4001/events', event).catch((err) => {
		console.log(err);
	});
	axios.post('http://query-srv:4002/events', event).catch((err) => {
		console.log(err);
	});
	axios.post('http://moderation-srv:4003/events', event).catch((err) => {
		console.log(err);
	});

	res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
	res.send(events);
});

app.listen(4005, () => {
	console.log('Fixed 45');
	console.log('Listening on 4005');
});
