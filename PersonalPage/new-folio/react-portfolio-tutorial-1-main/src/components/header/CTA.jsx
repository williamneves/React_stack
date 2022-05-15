import React from 'react'
import CV from '../../assets/cv.pdf'
import {BsFileEarmarkPdf} from 'react-icons/bs'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn cv-span'><span className='cv-icon'><BsFileEarmarkPdf/></span> <span>Download CV</span></a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA