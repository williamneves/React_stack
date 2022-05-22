import React, { useState, useEffect } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine, RiMailSendLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingIcons from 'react-loading-icons';
import TextareaAutosize from 'react-textarea-autosize';

const Contact = () => {
	const form = useRef();
	const [sendingEmail, setSendingEmail] = useState(false);
	const [formFields, setFormFields] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormFields({
			...formFields,
			[e.target.name]: e.target.value,
		});
	};

	const sendEmail = (e) => {
		e.preventDefault();
		setSendingEmail( true );
		
		// Making some validations
		// name needs to be at least 3 characters
		// emails needs to be valid by regex
		// message needs to be at least 10 characters
		// if all validations are passed, send email
		// send a toast message for each validation error

		if ( formFields.name.length < 3 ) {
			toast.error( 'Name needs to be at least 3 characters' )
			setTimeout(() => {
				setSendingEmail(false);
			}, 1000);
			return
		}
		else if ( !formFields.email.match( /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ) ) {
			toast.error( 'Email is not valid' )
			setTimeout(() => {
				setSendingEmail(false);
			}, 2000);
			return
		}
		else if ( formFields.message.length < 10 ) {
			toast.error( 'Message needs to be at least 10 characters' )
			setTimeout(() => {
				setSendingEmail(false);
			}, 2000);
			return
		}


		emailjs
			.sendForm('service_myportfolioreact', 'template_xnx5mbb', form.current, 'JwhE3u_awNI8Lulox')
			.then(
				(result) => {
					console.log(result.text);
					toast.success('Thanks for contact me!', {
						autoClose: 2500,
					});
					setTimeout(() => {
						setSendingEmail(false);
						e.target.reset();
					}, 1500);
				},
				(error) => {
					console.log(error.text);
					toast.error('Oops! Something went wrong. Please try again.');
					setTimeout(() => {
						setSendingEmail(false);
					}, 2000);
				}
			);
		//   setTimeout( () => {
		//   setSendingEmail( false );
		// }, 2000 );
	};

	return (
		<section id='contact'>
			<ToastContainer
				position='top-center'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
			/>
			<h2
				style={{
					lineHeight: '0rem',
					fontSize: '1.5rem',
					color: 'rgba(255, 255, 255, 0.6)',
					marginBottom: '0.2rem',
					paddingTop: '10px',
				}}>
				<BiMessageSquareDetail />
			</h2>
			<h4>Get In Touch</h4>
			<h2>Contact Me</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<a href='mailto:gwilliam.nn@gmail.com' target='_blank'>
						<article className='contact__option'>
							<MdOutlineEmail className='contact__option-icon' />
							<h4>Email</h4>
							<h5>gwilliam.nn@gmail.com</h5>
							<span href='mailto:gwilliam.nn@gmail.com<' target='_blank'>
								Send a message
							</span>
						</article>
					</a>
					<a href='https://www.facebook.com/drwilliamneves' target='_blank'>
						<article className='contact__option'>
							<RiMessengerLine className='contact__option-icon' />
							<h4>Messenger</h4>
							<h5>drwilliamneves</h5>
							<span href='https://www.facebook.com/drwilliamneves' target='_blank'>
								Send a message
							</span>
						</article>
					</a>
					<a href='https://api.whatsapp.com/send?phone=+19549945330' target='_blank'>
						<article className='contact__option'>
							<BsWhatsapp className='contact__option-icon' />
							<h4>WhatsApp</h4>
							<h5>+1 (954) 994-5330</h5>
							<span href='https://api.whatsapp.com/send?phone=+19549945330' target='_blank'>
								Send a message
							</span>
						</article>
					</a>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<div className='float-label'>
						<input
							type='text'
							name='name'
							required
							value={formFields.name}
							onChange={handleChange}
						/>
						<label htmlFor='name' className={formFields.name === '' ? '' : 'label-active'}>
							Your Full Name
						</label>
					</div>
					<div className='float-label'>
						<input
							type='text'
							name='email'
							required
							value={formFields.email}
							onChange={handleChange}
						/>
						<label htmlFor='name' className={formFields.email === '' ? '' : 'label-active'}>
							Your Email
						</label>
					</div>
					<div className='float-label'>
						<TextareaAutosize
							type='text'
							minRows='5'
							name='message'
							required
							value={formFields.message}
							onChange={handleChange}></TextareaAutosize>
						<label htmlFor='name' className={formFields.message === '' ? '' : 'label-active'}>
							Your Message
						</label>
					</div>
					<button
						type='submit'
						className='btn btn-primary btn-transition'
						disabled={sendingEmail}
						style={{ alignSelf: 'end', fontSize: '1.1rem' }}>
						{sendingEmail ? (
							<LoadingIcons.ThreeDots
								fill='#E87538'
								fillOpacity={0}
								height='.8em'
								speed={1.2}
								stroke='transparent'
								strokeOpacity={3}
								style={{}}
								width='150px'
							/>
						) : (
							<React.Fragment>
								Send Message{' '}
								<RiMailSendLine
									style={{ fontSize: '1.2rem', verticalAlign: 'bottom', marginLeft: '8px' }}
								/>
							</React.Fragment>
						)}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
