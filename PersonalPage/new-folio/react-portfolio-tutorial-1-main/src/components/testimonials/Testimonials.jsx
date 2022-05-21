import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import Shane from '../../assets/shame-humans-test.jpeg'
import parse from 'html-react-parser'
import {BsChatSquareQuote} from 'react-icons/bs'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: Shane,
    name: 'Shane Hummus',
    whois: 'Youtuber, Career Expert',
    review: `William <b>helped</b> me with a complicated project involving a quiz that helps identify careers that would be a good fit for your personality and I was really <b>impressed</b> with his <b>background</b>, <b>leadership</b> ability, and also how <b>fast</b> he picked up new information.<br/>He also has a <b>positive vibe</b> and a can-do personality, I <b>would recommend him</b> to anyone thinking of hiring a software dev.`
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    whois: 'CEO, Shmee',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    whois: 'CEO, Shmee',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    whois: 'CEO, Shmee',
    review: 'Modi alias animi dolorem aliquam ea eum beatae maiores, consectetur praesentium quibusdam, commodi velit porro blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labore distinctio ratione delectus voluptatem dolores deserunt explicabo nostrum ducimus quasi?'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h2 style={{lineHeight:'0rem',fontSize:'1.5rem', color: 'rgba(255, 255, 255, 0.6)',marginBottom:'0.2rem',paddingTop:'10px'}}><BsChatSquareQuote /></h2>
      <h4>Review from clients</h4>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review, whois}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h4 className='client__name'>{name}</h4>
              <h5 className='client__whois'>{whois}</h5>
                <small className='client__review'>{ parse( review )}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials