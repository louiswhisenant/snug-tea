import React from 'react';
import MainNav from '../components/Nav';
import left from '../assets/images/left-photo-1523906630133-f6934a1ab2b9.jpg';

const contact = () => {
	return (
		<main className='main'>
			<MainNav collapseBg='rgba(51,51,51,.75)' collapseText='#ccc' />
			<div className='jumbotron'>
				<img src={left} alt='' className='splash-img' />
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

export default contact;
