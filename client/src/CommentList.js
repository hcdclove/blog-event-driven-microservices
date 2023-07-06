// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

import React from 'react';

const CommentList = ({ comments }) => {
	const renderedComments = comments.map((comment) => {
		let content;

		if (comment.status === 'approved') {
			content = comment.content;
		}

		if (comment.status === 'pending') {
			content = 'This comment is awaiting moderation';
		}

		if (comment.status === 'rejected') {
			content = 'This comment has been rejected';
		}

		return <li key={comment.id}>{content}</li>;
	});

	return <ul>{renderedComments}</ul>;
};

export default CommentList;
