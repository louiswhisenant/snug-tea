import React, { useState, useEffect, useCallback } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ScrollDownAlert = () => {
	const [hasScrolled, setHasScrolled] = useState(false);

	const handleScroll = useCallback(() => {
		setHasScrolled(true);
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line
	}, [handleScroll]);
	return (
		<div
			className={`scroll-down-alert ${
				hasScrolled ? 'hide' : ''
			} sda-outer`}>
			<div className='sda-inner'>
				<FontAwesomeIcon icon={faChevronDown} />
			</div>
		</div>
	);
};

export default ScrollDownAlert;
