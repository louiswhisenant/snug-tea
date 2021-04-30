import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MainNav = ({ navBg, navBg2, collapseBg, collapseBg2, text }) => {
	const navRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [fade, setFade] = useState(false);
	const [scrollY, setScrollY] = useState(0);

	// ----------Functions

	const handleToggle = () => {
		setIsOpen(!isOpen);
		setFade(true);
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
			style={{ backgroundColor: scrollY > 0 ? navBg : navBg2 }}>
			<Navbar light expand='md'>
				<Link to='/' className='nav-brand'>
					Snug Tea
				</Link>
				<NavbarToggler onClick={handleToggle} className='d-md-none'>
					<p className={`navbar-toggler-text ${fade ? 'fade' : ''}`}>
						Menu
					</p>
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
					style={{
						backgroundColor: scrollY > 0 ? collapseBg : collapseBg2,
					}}>
					<Nav navbar>
						<Link
							to='/'
							className='nav-item'
							style={{ color: text }}>
							{' '}
							Home
						</Link>
						<Link
							to='/about'
							className='nav-item'
							style={{ color: text }}>
							About
						</Link>
						<Link
							to='/services'
							className='nav-item'
							style={{ color: text }}>
							Services
						</Link>
						<Link
							to='/contact'
							className='nav-item'
							style={{ color: text }}>
							Contact
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainNav;
