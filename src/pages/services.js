import React from 'react';

import MainNav from '../components/Nav';
import ScrollDownAlert from '../components/ScrollDownAlert';

import * as vars from '../assets/styling/scss/variables.module.scss';

const services = () => {
	return (
		<main id='services'>
			<MainNav
				navBg='transparent'
				navBg2={vars.colorOne75}
				text={vars.light}
				text2={vars.light}
			/>
			<div className='jumbotron'>
				<img
					src={`https://images.unsplash.com/photo-1551540827-6c8ae1aaedbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`}
					alt=''
					className='splash-img'
				/>
				<div className='slug-center'>
					<h2>What we do.</h2>
				</div>
			</div>

			<ScrollDownAlert />
		</main>
	);
};

export default services;
