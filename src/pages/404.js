import React from 'react';
import { Link } from 'gatsby';
import kermit from '../assets/images/404.jpg';

// markup
const NotFoundPage = () => {
	return (
		<main id='not-found'>
			<img src={kermit} alt='' className='not-found-img' />
			<div className='not-found-msg'>
				<h1>404: Page not Found</h1>
				<Link to='/'>Return to the Home Page</Link>
			</div>
		</main>
	);
};

export default NotFoundPage;
