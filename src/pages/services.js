import React from 'react';

import MainNav from '../components/Nav';
import ScrollDownAlert from '../components/ScrollDownAlert';
import ServicesOffering from '../components/ServicesOffering';

import * as vars from '../assets/styling/scss/variables.module.scss';
import { Container, Row } from 'reactstrap';

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

			<section id='services-content'>
				<div className='services-intro'>
					<Container>
						<Row className='services-intro-text'>
							<p className='col-12'>
								<span className='lead'>Lorem ipsum dolor</span>{' '}
								sit amet consectetur adipisicing elit. Maxime
								officiis magnam odio saepe? Nemo consectetur
								ullam, a perspiciatis dolorum tempore saepe
								dolor beatae corrupti, vitae enim aperiam culpa.
								Eligendi, consequuntur.
							</p>
							<br />
							<p className='col-12 lead'>Find Out More Below</p>
						</Row>
					</Container>
				</div>

				<ServicesOffering
					id='fine-tea-imports'
					img={`https://images.unsplash.com/photo-1563822249366-3efb23b8e0c9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`}
					title='Fine Tea Imports'
					desc='Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Architecto, neque
					praesentium. Id iste eos dolor impedit
					magnam pariatur tempore nostrum qui,
					adipisci ratione sequi debitis velit sit
					atque et, unde voluptatum asperiores labore?
					Facilis eveniet eos molestiae consectetur,
					dolor quidem at ipsa voluptatibus
					consequuntur. Ipsum, recusandae vel.
					Distinctio, dicta nostrum!'
				/>
				<ServicesOffering
					id='catering-and-tastings'
					img={`https://images.unsplash.com/photo-1597916375337-71d5e4485bcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80`}
					title='Event Catering &amp; Tastings'
					desc='Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Architecto, neque
					praesentium. Id iste eos dolor impedit
					magnam pariatur tempore nostrum qui,
					adipisci ratione sequi debitis velit sit
					atque et, unde voluptatum asperiores labore?
					Facilis eveniet eos molestiae consectetur,
					dolor quidem at ipsa voluptatibus
					consequuntur. Ipsum, recusandae vel.
					Distinctio, dicta nostrum!'
				/>
			</section>
		</main>
	);
};

export default services;
