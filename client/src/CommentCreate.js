// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
	const [content, setContent] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();

		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content
		});

		setContent('');
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className='form-group'>
					<label>New Comment</label>
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className='form-control'
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
};

export default CommentCreate;
