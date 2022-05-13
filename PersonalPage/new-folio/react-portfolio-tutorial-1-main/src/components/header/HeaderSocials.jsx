import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {MdOutlineEmail} from 'react-icons/md'
import {FiDribbble,FiLinkedin,FiGithub,FiTwitter} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a> */}
        <a href="https://www.linkedin.com/in/gwilliamnn/" target="_blank"><FiLinkedin/></a>
        {/* <a href="https://github.com" target="_blank"><FaGithub/></a> */}
        <a href="https://github.com/williamneves" target="_blank"><FiGithub/></a>
        <a href="https://twitter.com/drwilliamneves" target="_blank"><FiTwitter/></a>
        <a href="#contact"><MdOutlineEmail/></a>
    </div>
  )
}

export default HeaderSocials