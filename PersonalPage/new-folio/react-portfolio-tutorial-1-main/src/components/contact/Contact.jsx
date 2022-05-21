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

const Contact = () => {
	const form = useRef();
	const [sendingEmail, setSendingEmail] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setSendingEmail(true);
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
							<a href='mailto:gwilliam.nn@gmail.com<' target='_blank'>
								Send a message
							</a>
						</article>
					</a>
					<a href='https://www.facebook.com/drwilliamneves' target='_blank'>
						<article className='contact__option'>
							<RiMessengerLine className='contact__option-icon' />
							<h4>Messenger</h4>
							<h5>drwilliamneves</h5>
							<a href='https://www.facebook.com/drwilliamneves' target='_blank'>
								Send a message
							</a>
						</article>
					</a>
					<a href='https://api.whatsapp.com/send?phone=+19549945330' target='_blank'>
						<article className='contact__option'>
							<BsWhatsapp className='contact__option-icon' />
							<h4>WhatsApp</h4>
							<h5>+1 (954) 994-5330</h5>
							<a href='https://api.whatsapp.com/send?phone=+19549945330' target='_blank'>
								Send a message
							</a>
						</article>
					</a>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form ref={form} onSubmit={sendEmail}>
					<input type='text' name='name' placeholder='Your Full Name' required />
					<input type='email' name='email' placeholder='Your Email' required />
					<textarea name='message' rows='7' placeholder='Your Message' required></textarea>
					<button type='submit' className='btn btn-primary' disabled={sendingEmail}>
						Send Message{' '}
						<RiMailSendLine
							style={{ fontSize: '1rem', verticalAlign: 'bottom', marginLeft: '8px' }}
						/>
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
