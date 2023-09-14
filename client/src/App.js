// ******************HC BLOG*****************
// The HC blog is an event driven application.  It illustrates the use of
// microservices to create and display posts and comments to the posts.
// Author: Hernan Clarke

import React from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';

const App = () => {
	return (
		<div className='container'>
			<h1>Create Post</h1>
			<PostCreate />
			<hr />
			<h1>Blog Posts</h1>
			<PostList />
		</div>
	);
};
export default App;
