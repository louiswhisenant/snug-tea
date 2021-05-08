import React from 'react';
import { Container, Row } from 'reactstrap';
import ContactForm from '../components/ContactForm';
import MainNav from '../components/Nav';

import * as vars from '../assets/styling/scss/variables.module.scss';

const contact = () => {
	return (
		<main id='contact'>
			<MainNav
				navBg={vars.colorOne}
				navBg2={vars.colorOne}
				text={vars.light}
				text2={vars.light}
			/>
			<Container className='form-wrapper'>
				<Row>
					<div className='contact-title col-12'>
						<h2>Contact Us</h2>
						<hr />
					</div>
					<div className='col-12 contact-desc'>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nihil atque eum, ipsum, tempore omnis quisquam
							culpa tenetur, dolorum totam nesciunt incidunt
							necessitatibus harum officia at.
						</p>
					</div>
					<ContactForm className='col-12' />
				</Row>
			</Container>
		</main>
	);
};

export default contact;
