import React from 'react';
import { Container, Row } from 'reactstrap';

const AboutBio = ({ id, img, name, occupation, fav, desc }) => {
	return (
		<Container className='about-bio' id={id}>
			<Row>
				<div className='about-bio-image col-lg-4 col-12'>
					<img src={img} alt='' className='image' />
				</div>
				<div className='about-bio-info col-lg-8 col-12'>
					<h3 className='info-name'>{name}</h3>
					<h4 className='info-occupation'>{occupation}</h4>
					<p className='info-desc'>{desc}</p>
					<h5 className='info-fav-tea'>Favorite Tea: {fav}</h5>
					<hr />
				</div>
			</Row>
		</Container>
	);
};

export default AboutBio;
