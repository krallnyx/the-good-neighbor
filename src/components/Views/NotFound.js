import React from 'react';

const NotFound = (props) => {
	return(
		<div>
			<div class="container">
				<img src={require('../../media/error.jpg')} className="w-75" alt="Page not found"/>
				<div className="h1 text-primary text-shadow">Unfortunately, it seems that you are lost, this page doesn't exist.</div>
			</div>
		</div>
		)
}

export default NotFound