import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine, RiMailSendLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2 style={{lineHeight:'0rem',fontSize:'1.5rem', color: 'rgba(255, 255, 255, 0.6)',marginBottom:'0.2rem',paddingTop:'10px'}}><BiMessageSquareDetail/></h2>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dummyegator@gmail.com</h5>
            <a href="mailto:dummyegator@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>egatortutorials</h5>
            <a href="https://m.me/ernest.achiever" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href="https://api.whatsapp.com/send?phone=+1234567890" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message <RiMailSendLine style={{fontSize:'1rem', verticalAlign: 'bottom', marginLeft:'8px'}}/></button>
        </form>
      </div>
    </section>
  )
}

export default Contact