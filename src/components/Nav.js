import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MainNav = ({ navBg, navText, collapseBg, collapseText }) => {
	const navRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	// ----------Functions

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = useCallback(() => {
		setScrollY(window.pageYOffset);
	}, []);

	const clickListener = (e) => {
		if (navRef.current && navRef.current.contains(e.target)) {
			return;
		}

		setIsOpen(false);
	};

	// ----------useEffects

	// Scroll listener
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
		// eslint-disable-next-line
	}, [handleScroll]);

	// Nav off-click
	useEffect(() => {
		document.addEventListener('click', clickListener);

		return () => {
			document.removeEventListener('click', clickListener);
		};
	}, []);

	return (
		<div
			id='nav'
			ref={navRef}
			style={{ backgroundColor: scrollY > 0 && navBg }}>
			<Navbar light expand='md'>
				<Link to='/' className='nav-brand'>
					Snug Tea
				</Link>
				<NavbarToggler onClick={handleToggle}>
					<FontAwesomeIcon
						icon={faCoffee}
						className={`navbar-toggler-icon ${
							isOpen ? 'pour' : ''
						}`}
					/>
				</NavbarToggler>
				<Collapse
					isOpen={isOpen}
					navbar
					style={{ backgroundColor: scrollY > 0 && collapseBg }}>
					<Nav navbar>
						<Link to='/' className='nav-item'>
							{' '}
							Home
						</Link>
						<Link to='/about' className='nav-item'>
							About
						</Link>
						<Link to='/services' className='nav-item'>
							Services
						</Link>
						<Link to='/contact' className='nav-item'>
							Contact
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainNav;
