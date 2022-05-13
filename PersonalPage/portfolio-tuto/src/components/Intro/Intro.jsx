import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from './../FloatingDiv/FloatingDiv';

const Intro = () => {
	return (
		<div className='intro'>
			<div className='i-left'>
				<div className='i-name'>
					<span>Hy! I Am</span>
					<span>William Neves</span>
					<span>
						Full Stack Developer with high level of experience in solving problems, optimize results
						and quality.
					</span>
				</div>
				<button className='i-button button'>Hire me</button>
				<div className='i-icons'>
					<img src={Github} alt='Github profile link' />
					<img src={Linkedin} alt='Linkedin profile link' />
					<img src={Instagram} alt='Instagram profile link' />
				</div>
			</div>
			<div className='i-right'>
				<img src={Vector1} alt='' />
				<img src={Vector2} alt='' />
				<img src={boy} alt='' />
				<img src={glassesimoji} alt='' />
				<div style={{ top: '-4%', left: '68%' }}>
					<FloatingDiv image={Crown} text1='Full-Stack' text2='Developer' />
				</div>
				<div style={{ top: '18rem', left: '0rem' }}>
					<FloatingDiv image={thumbup} text1='Highly Qualified' text2='Professional' />
				</div>
				{/* blur divs */}
				<div className='blur' style={{ background: 'rgb(222 204 54 / 39%)' }}></div>
				<div
					className='blur'
					style={{
						background: '#c1f5ff',
						top: '17rem',
						width: '21rem',
						height: '11rem',
						left: '-9rem',
					}}></div>
			</div>
		</div>
	);
};

export default Intro;
