import React from 'react'
import './about.css'
import ME from '../../assets/me-about2.jpg'
import {GiSmart, GiTeamUpgrade} from 'react-icons/gi'
import {RiUserStarLine,RiContactsLine} from 'react-icons/ri'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {MdOutlineFamilyRestroom} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h2 style={ { lineHeight: '0rem', fontSize: '1.5rem', color: 'rgba(255, 255, 255, 0.6)', marginBottom: '0.2rem', paddingTop: '10px' } }><RiContactsLine/></h2>
      <h4>Get To Know</h4>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <RiUserStarLine className='about__icon'/>
              <h3>Experience</h3>
              <small>For 10 years I led my team to overcome all goals.</small>
            </article>

            <article className='about__card'>
              <GiSmart className='about__icon'/>
              <h3>Problem Solver</h3>
              <small>Solving problems is my passion.</small>
            </article>

            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h3>Project Leader</h3>
              <small>I lead delicate projects to success in the face of difficulties.</small>
            </article>
            <article className='about__card'>
              <MdOutlineFamilyRestroom className='about__icon'/>
              <h3>Friendly</h3>
              <small>I'm happy and positive.  God, family and my purpose are everything to me.</small>
            </article>
          </div>

          <p>
          I'm a Full-Stack Software Engineer, looking for a different experience. After 10 years of <em>successful</em> corporate experience, I decided to challenge myself and follow the path that I am certain I will be more passionate and even better atn.
          </p>
          <p>
          If you're looking for someone highly motivated, with experience and unique skills, you've found it. <b>Let's talk?</b>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About