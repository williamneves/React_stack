import React from 'react'
import './nav.css'
import {AiOutlineUser} from 'react-icons/ai'
import {RiContactsLine, RiUserStarLine} from 'react-icons/ri'
import {BiMessageSquareDetail, BiGitBranch, } from 'react-icons/bi'
import { useState } from 'react';
import Scrollspy from 'react-scrollspy';
const Nav = () => {
	return (
		<React.Fragment>
			<nav>
				<Scrollspy
					items={['home', 'about', 'experience', 'portfolio', 'contact']}
					currentClassName='active'
					// componentTag='a'
				>
					<a href='#home' className='nav-link'>
						<AiOutlineUser />
					</a>
					<a href='#about' className='nav-link'>
						<RiContactsLine />
					</a>
					<a href='#experience' className='nav-link'>
						<RiUserStarLine />
					</a>
					<a href='#portfolio'>
						<BiGitBranch />
					</a>
					<a href='#contact'>
						<BiMessageSquareDetail />
					</a>
				</Scrollspy>
			</nav>
		</React.Fragment>
	);
};

export default Nav