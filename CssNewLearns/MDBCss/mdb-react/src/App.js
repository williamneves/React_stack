import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';

function App() {
	const [ currentTheme, setCurrentTheme ] = useState( 'light-skin' );
	
	// useEffect(()  => {
  //   document.body.classList.add('bg-dark');

  //   return () => {
  //       document.body.classList.remove('bg-dark');
  //   };
	// }, [ currentTheme ] );
	
	const handleThemeChange = () => {
		if ( currentTheme === 'light-skin' ) {
			document.body.style.backgroundColor = '#303030';
			setCurrentTheme( 'dark-skin' );
		} else {
			setCurrentTheme( 'light-skin' );
			document.body.style.backgroundColor = '#ffffff';
		}
	};

	return (
		<MDBContainer fluid className={currentTheme} style={{ height: 'calc(100%)' }}>
			<div className='d-flex justify-content-center align-items-center' >
				<div className='text-center'>
					<h5 className='mb-3'>Thank you for using our product. We're glad you're with us.</h5>
					<p className='mb-3'>MDB Team</p>
					<MDBBtn href='#' role='button'>
						Start MDB tutorial
					</MDBBtn>
					<MDBBtn color='secondary'>Secondary</MDBBtn>
					<MDBBtn color='danger'>Accent</MDBBtn>
				</div>
			</div>
			<div className='text-center'>
				<MDBBtn color='light' onClick={handleThemeChange}>
					Light theme
				</MDBBtn>
				<MDBBtn color='dark' onClick={handleThemeChange}>
					Dark theme
				</MDBBtn>
			</div>
		</MDBContainer>
	);
}

export default App;
