import React from 'react';
import splash from '../assets/images/bottom-photo-1458819714733-e5ab3d536722.jpg';
import Link from 'gatsby-link';
// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styling/scss/main.scss';
import * as vars from '../assets/styling/scss/variables.module.scss';
import { Container, Row } from 'reactstrap';

import MainNav from '../components/Nav';
import IndexBio from '../components/IndexBio';
import IndexOffering from '../components/IndexOffering';
import ScrollDownAlert from '../components/ScrollDownAlert';
import Footer from '../components/Footer';

// markup
const IndexPage = () => {
	return (
		<main className='main'>
			<MainNav
				navBg='transparent'
				navBg2={vars.colorOne75}
				text={vars.dark}
				text2={vars.light}
			/>
			<div className='jumbotron'>
				<img src={splash} alt='' className='splash-img' />
				<div className='slug'>
					<h2>Warm.</h2>
					<h2>Cozy.</h2>
					<h2>Comfort.</h2>
					<h2 className='slug-special'>Snug.</h2>
				</div>
				<h1 className='slug-center'>Tea.</h1>
			</div>
			<ScrollDownAlert />
			<section id='index-content'>
				<section id='index-about'>
					<div className='index-banner-wrapper about'>
						<div className='bg-1'></div>
						<div className='bg-2'></div>
						<Container>
							<Row>
								<h2 className='mx-auto banner-title index-banner-title who-we-are'>
									Who We Are
								</h2>
							</Row>
						</Container>
					</div>
					<div className='index-blurb-anchor'>
						<img
							src={`https://images.unsplash.com/photo-1507499155415-696f83e0e828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80`}
							className='index-blurb-bg'
							alt=''
						/>
						<Container>
							<Row className='index-blurb'>
								<p className='col-12 mb-5'>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Consequatur iure quisquam
									tenetur consectetur inventore accusantium
									minima ipsum ipsam, voluptatem alias, qui
									cumque odio.
								</p>
								<Link
									to='/about'
									className='col-10 col-md-3 mx-auto btn'>
									About Us
								</Link>
							</Row>
						</Container>
					</div>

					<div className='d-none d-md-flex index-about-bios'>
						<Container>
							<Row>
								<IndexBio
									img={`https://images.unsplash.com/photo-1617209705012-a6a09a695036?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1070&q=80`}
									name='Jimmy Stewart'
									occupation='CEO'
									id='jimmy-stewart'
								/>
								<IndexBio
									img={`https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
									name='Gina Lollobrigida'
									occupation='Marketing'
									id='gina-lollobrigida'
								/>
								<IndexBio
									img={`https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
									name='James Dean'
									occupation='Procurement'
									id='james-dean'
								/>
								<IndexBio
									img={`https://images.unsplash.com/photo-1602622021975-dacdcf516c43?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1069&q=80`}
									name='Olivia Hussey'
									occupation='Catering'
									id='olivia-hussey'
								/>
							</Row>
						</Container>
					</div>
				</section>

				<section id='index-services'>
					<div className='index-banner-wrapper services'>
						<div className='bg-1'></div>
						<div className='bg-2'></div>
						<Container>
							<Row>
								<h2 className='mx-auto banner-title index-banner-title what-we-do'>
									What We Do
								</h2>
							</Row>
						</Container>
					</div>

					<div className='index-blurb-anchor'>
						<img
							src={`https://images.unsplash.com/photo-1536513953700-ba24c78a5f51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80`}
							className='index-blurb-bg'
							alt=''
						/>
						<Container>
							<Row className='index-blurb'>
								<p className='col-12 mb-5'>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Consequatur iure quisquam
									tenetur consectetur inventore accusantium
									minima ipsum ipsam, voluptatem alias, qui
									cumque odio.
								</p>
								<Link
									to='/services'
									className='col-10 col-md-3 mx-auto btn'>
									Our Services
								</Link>
							</Row>
						</Container>
					</div>

					<div className='d-none d-md-flex index-services-offerings'>
						<Container>
							<Row>
								<IndexOffering
									img={`https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`}
									title={`Fine Tea Imports`}
									desc={`Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
									Laborum, quo.`}
									to='/services'
								/>
								<IndexOffering
									img={`https://images.unsplash.com/photo-1597916375337-71d5e4485bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`}
									title='Event Catering &amp; Tastings'
									desc='Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
									Laborum, quo.'
									to='/services'
								/>
							</Row>
						</Container>
					</div>
				</section>

				<section id='index-contact'>
					<div className='index-banner-wrapper contact'>
						<div className='bg-1'></div>
						<div className='bg-2'></div>
						<Container>
							<Row>
								<h2 className='mx-auto banner-title index-banner-title how-to-reach-us'>
									How to Reach Us
								</h2>
							</Row>
						</Container>
					</div>

					<div className='index-blurb-anchor'>
						<img
							src={`https://images.unsplash.com/photo-1615883962708-708904fe162e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=940&q=80`}
							className='index-blurb-bg'
							alt=''
						/>
						<Container>
							<Row className='index-blurb'>
								<p className='col-12 mb-5'>
									Lorem ipsum dolor sit amet consectetur,
									adipisicing elit. Consequatur iure quisquam
									tenetur consectetur inventore accusantium
									minima ipsum ipsam, voluptatem alias, qui
									cumque odio.
								</p>
								<Link
									to='/contact'
									className='col-10 col-md-3 mx-auto btn'>
									Contact Us
								</Link>
							</Row>
						</Container>
					</div>
				</section>
			</section>

			<Footer bg={vars.colorOne} text={vars.colorTwo} />
		</main>
	);
};

export default IndexPage;
