import React from 'react'
import './nav.css'
import {AiOutlineUser} from 'react-icons/ai'
import {BsChatSquareQuote} from 'react-icons/bs'
import {RiContactsLine, RiUserStarLine} from 'react-icons/ri'
import {BiMessageSquareDetail, BiGitBranch, } from 'react-icons/bi'
import Scrollspy from 'react-scrollspy';
const Nav = () => {
	return (
		<React.Fragment>
			<nav>
				<Scrollspy
					items={['home', 'about', 'experience', 'portfolio', 'testimonials','contact']}
					currentClassName='active'
					// componentTag='a'
				>
					<a href='#home'>
						<AiOutlineUser />
					</a>
					<a href='#about'>
						<RiContactsLine />
					</a>
					<a href='#experience'>
						<RiUserStarLine />
					</a>
					<a href='#portfolio'>
						<BiGitBranch />
					</a>
					<a href='#testimonials'>
						<BsChatSquareQuote />
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