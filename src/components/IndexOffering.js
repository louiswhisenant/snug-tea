import React from 'react';
import { Card } from 'reactstrap';
import Link from 'gatsby-link';

const IndexOffering = ({ img, title, desc, to }) => {
	return (
		<div className='col-lg-6 col-md-12 index-offering'>
			<Card className='offering-card'>
				<img src={img} alt='' className='offering-img' />
				<div className='offering-info'>
					<h3 className='offering-title'>{title}</h3>
					<p className='offering-desc'>{desc}</p>
					<Link to={to} className='offering-btn btn'>
						Learn More
					</Link>
				</div>
			</Card>
		</div>
	);
};

export default IndexOffering;
