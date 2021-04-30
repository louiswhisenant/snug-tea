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
				</div>
				<Link to={`/about#${id}`} className='btn btn-1'>
					Learn More
				</Link>
			</Card>
		</div>
	);
};

export default BioCard;
