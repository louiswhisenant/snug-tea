import React, { useState } from 'react';

const ContactForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emptyField, setEmptyField] = useState('');

	const handleCancel = (e) => {
		e.preventDefault();

		setName('');
		setEmail('');
		setMessage('');
	};

	return (
		<form
			className='contact-form'
			action='https://www.flexyform.com/f/b33c398c6558584302bcc5bc04e4c99ef5074120'
			method='post'>
			<label htmlFor='name'>Name</label>
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
			<input
				type='text'
				style={{ visibility: 'hidden' }}
				value={emptyField}
				onChange={(e) => setEmptyField(e.target.value)}
				name='_empty_field'
			/>
			<ul className='actions'>
				<li>
					<button
						className='btn'
						onClick={(e) => {
							handleCancel(e);
						}}>
						Cancel
					</button>
				</li>
				<li>
					<button type='submit' className='btn'>
						Send
					</button>
				</li>
			</ul>
		</form>
	);
};

export default ContactForm;
