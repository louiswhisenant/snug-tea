import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'gatsby-link';
import { Nav, Navbar, NavbarToggler, Collapse } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const MainNav = ({ navBg, navBg2, text, text2 }) => {
	const navRef = useRef();
	const [isOpen, setIsOpen] = useState(false);
	const [fade, setFade] = useState(false);
	const [scrollY, setScrollY] = useState(0);

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
			style={{
				backgroundColor: scrollY > 0 ? navBg2 : navBg,
			}}>
			<Navbar light expand='md'>
				<Link to='/' className='nav-brand'>
					Snug Tea
				</Link>
				<NavbarToggler
					onClick={handleToggle}
					className='d-md-none'
					style={{ color: scrollY > 0 ? text2 : text }}>
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
				<Collapse isOpen={isOpen} navbar>
					<Nav navbar>
						<Link
							to='/'
							className='nav-item'
							style={{ color: scrollY > 0 ? text2 : text }}>
							{' '}
							Home
						</Link>
						<Link
							to='/about'
							className='nav-item'
							style={{ color: scrollY > 0 ? text2 : text }}>
							About
						</Link>
						<Link
							to='/services'
							className='nav-item'
							style={{ color: scrollY > 0 ? text2 : text }}>
							Services
						</Link>
						<Link
							to='/contact'
							className='nav-item'
							style={{ color: scrollY > 0 ? text2 : text }}>
							Contact
						</Link>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default MainNav;
