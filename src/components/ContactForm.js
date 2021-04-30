import React, { useState } from 'react';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleCancel = (e) => {
		e.preventDefault();

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form
			className='contact-form'
			action='b33c398c6558584302bcc5bc04e4c99ef5074120'
			method='post'>
			<label htmlFor='name'>Full name</label>
			<input
				type='text'
				name='name'
				className='name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<label htmlFor='email'>Email</label>
			<input
				type='email'
				name='email'
				className='email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor='message'>Message</label>
			<textarea
				name='message'
				className='message'
				rows='5'
				value={message}
				onChange={(e) => setMessage(e.target.value)}></textarea>
			<ul className='actions'>
				<li>
					<button
						className='btn btn-2'
						onClick={(e) => {
							handleCancel(e);
						}}>
						Cancel
					</button>
				</li>
				<li>
					<button type='submit' className='btn btn-2'>
						Send
					</button>
				</li>
			</ul>
		</form>
	);
};

export default ContactForm;
