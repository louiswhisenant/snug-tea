import React from 'react';
// assets
import right from '../assets/images/right-photo-1519682577862-22b62b24e493.jpg';
// styling
import * as vars from '../assets/styling/scss/variables.module.scss';
// components
import MainNav from '../components/Nav';
import ScrollDownAlert from '../components/ScrollDownAlert';
import AboutBio from '../components/AboutBio';

const about = () => {
	return (
		<main id='about'>
			<MainNav
				navBg='transparent'
				navBg2={vars.colorOne75}
				text={vars.light}
				text2={vars.light}
			/>
			<div className='jumbotron'>
				<img src={right} alt='' className='splash-img' />
				<div className='slug-center'>
					<h2>
						Meet the <span className='slug-special'>tea</span>m.
					</h2>
				</div>
			</div>
			<ScrollDownAlert />

			<section id='about-content'>
				<AboutBio
					id='jimmy-stewart'
					img={`https://images.unsplash.com/photo-1617209705012-a6a09a695036?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80`}
					name='Jimmy Stewart'
					occupation='CEO'
					fav='Blood Orange Black Tea'
					desc='Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Tenetur laborum facere
					laudantium, id similique nam optio quidem dolore
					vel vitae, aperiam possimus veniam labore
					mollitia?'
				/>
				<AboutBio
					id='gina-lollobrigida'
					img={`https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
					name='Gina Lollobrigida'
					occupation='Marketing'
					fav='Min-Pei Oolong'
					desc='Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Tenetur laborum facere
							laudantium, id similique nam optio quidem dolore
							vel vitae, aperiam possimus veniam labore
							mollitia?'
				/>
				<AboutBio
					id='james-dean'
					img={`https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
					name='James Dean'
					occupation='Procurement'
					fav='Sleepy Time'
					desc='Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Tenetur laborum facere
							laudantium, id similique nam optio quidem dolore
							vel vitae, aperiam possimus veniam labore
							mollitia?'
				/>
				<AboutBio
					id='olivia-hussey'
					img={`https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80`}
					name='Olivia Hussey'
					occupation='Catering'
					fav='Rose Congou Black Tea'
					desc='Lorem ipsum dolor sit amet consectetur
							adipisicing elit. Tenetur laborum facere
							laudantium, id similique nam optio quidem dolore
							vel vitae, aperiam possimus veniam labore
							mollitia?'
				/>
			</section>
		</main>
	);
};

export default about;
