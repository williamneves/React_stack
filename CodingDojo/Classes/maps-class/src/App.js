import './App.css';
import Step from './component/Step';
import { useState } from 'react';

function App() {
	const [step, setStep] = useState([
		
  ] );
  
  const handleSubmit = ( e ) => {
    e.preventDefault();
    console.log( e.target.direction.value );
    setStep( [...step, { direction: e.target.direction.value, instructions: e.target.instructions.value, distance: e.target.distance.value }] );
  }

  const handleDelete = ( index ) => {
    const newStep = [ ...step ];
    newStep.splice( index, 1 );
    setStep( newStep );
  }

	return (
		<div className='App'>
			<h1 className='mb-5'>Directions App</h1>
			<div className='col-6 mx-auto mb-5'>
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className='input-group mb-3 col-2'>
						<select className='form-select' name='direction' aria-label='Default select example'>
							<option defaultValue>Direction</option>
							<option value='up'>Foward</option>
							<option value='left'>Left</option>
							<option value='right'>Right</option>
						</select>
						<input
							type='text'
              className='form-control col-6'
              name='instructions'
							aria-label='Text input with segmented dropdown button'
						/>
						<input
							type='number'
              className='form-control col-2'
              name='distance'
              aria-label='Text input with segmented dropdown button'
              step={0.1}
						/>
						<button type='submit' className='btn btn-secondary col-2'>
							Submit
						</button>
					</div>
				</form>
			</div>

			<div className='col-6 mx-auto'>
				{step.map((step, index) => {
					return (
						<Step
							direction={step.direction}
							instructions={step.instructions}
							distance={step.distance}
              id={ index }
              onDelete={ () => handleDelete( index ) }
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
