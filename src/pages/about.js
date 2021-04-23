import React from 'react';
import right from '../assets/images/right-photo-1519682577862-22b62b24e493.jpg';

import MainNav from '../components/Nav';

const about = () => {
	return (
		<main className='main'>
			<MainNav />
			<div className='splash'>
				<img src={right} alt='' className='splash-img' />
			</div>
		</main>
	);
};

export default about;
