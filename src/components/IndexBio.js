import React from 'react';
import Link from 'gatsby-link';
import { Card } from 'reactstrap';

const BioCard = ({ id, img, name, occupation }) => {
	return (
		<div className='col-xl-3 col-md-6 bio'>
			<Card className='bio-card'>
				<img src={img} alt='' className='bio-img' />
				<div className='bio-info'>
					<h3 className='bio-name'>{name}</h3>
					<h4 className='bio-occupation'>{occupation}</h4>
					<Link to={`/about#${id}`} className='bio-learn-more btn'>
						Learn More
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default BioCard;
