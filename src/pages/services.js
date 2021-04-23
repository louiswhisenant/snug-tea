import React from 'react';
import bottom from '../assets/images/bottom-photo-1458819714733-e5ab3d536722.jpg';

import MainNav from '../components/Nav';

const services = () => {
	return (
		<main className='main'>
			<MainNav />
			<div className='jumbotron'>
				<img src={bottom} alt='' className='splash-img' />
				<div className='slug'>
					<h2>Warm.</h2>
					<h2>Cozy.</h2>
					<h2>Comfort.</h2>
					<h2>Snug.</h2>
					<h1>Tea.</h1>
				</div>
			</div>
		</main>
	);
};

export default services;
