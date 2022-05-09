import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';

function App() {
	const [currentTheme, setCurrentTheme] = useState('light-skin');

	return (
		<MDBContainer fluid className={currentTheme}>
			<div className='d-flex justify-content-center align-items-center' style={{ height: '50vh' }}>
				<div className='text-center'>
					<h5 className='mb-3'>Thank you for using our product. We're glad you're with us.</h5>
					<p className='mb-3'>MDB Team</p>
					<MDBBtn href='#' role='button'>
						Start MDB tutorial
					</MDBBtn>
					<MDBBtn color='secondary'>Secondary</MDBBtn>
					<MDBBtn color='danger'>Accent</MDBBtn>
					<div className='form-outline'>
						<input type='text' id='form12' className='form-control' />
						<label className='form-label' htmlFor='form12'>
							Example label
						</label>
					</div>
					<MDBInput label='Example label' id='form1' type='text' />
				</div>
			</div>
			<div className='text-center'>
				<MDBBtn color='light' onClick={() => setCurrentTheme('light-skin')}>
					Light theme
				</MDBBtn>
				<MDBBtn color='dark' onClick={() => setCurrentTheme('dark-skin')}>
					Dark theme
				</MDBBtn>
			</div>
		</MDBContainer>
	);
}

export default App;
