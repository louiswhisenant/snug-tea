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
				collpaseBg={vars.colorOne}
				collapseBg2={vars.colorOne}
			/>
			<div className='jumbotron'>
				<img
					src={`https://images.unsplash.com/photo-1615883962708-708904fe162e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=940&q=80`}
					alt=''
					className='splash-img'
				/>
			</div>
			<Container className='form-wrapper'>
				<Row>
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
