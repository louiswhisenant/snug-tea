import React from 'react';
import { Container, Row } from 'reactstrap';
import Link from 'gatsby-link';

const ServicesOffering = ({ id, img, title, desc }) => {
	return (
		<div className='services-offering' id={id}>
			<div className='offering-banner'>
				<img src={img} alt='' className='offering-banner-img' />
				<div className='offering-banner-title'>
					<h2>{title}</h2>
				</div>
			</div>

			<Container>
				<Row>
					<div className='offering-info col-12'>
						<p className='info-desc'>{desc}</p>
						<Link to='/contact' className='btn'>
							Contact Us
						</Link>
					</div>
				</Row>
			</Container>
		</div>
	);
};

export default ServicesOffering;
