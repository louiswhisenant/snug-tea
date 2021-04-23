import React from 'react';

const Footer = ({ bg, text }) => {
	return (
		<footer style={{ backgroundColor: bg, color: text }}>
			<div className='footer text-center p-4'>
				<span>
					Made by{' '}
					<a href='https://louiswhisenant.com'>Louis Whisenant</a>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
