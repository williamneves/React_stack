import logo from './logo.svg';
import './App.css';
import { MDBInput } from 'mdb-react-ui-kit';

function App() {
	return (
		<>
			<div class='btn-group' role='group' aria-label='Basic example'>
				<button type='button' class='btn btn-primary'>
					Left
				</button>
				<button type='button' class='btn btn-primary'>
					Middle
				</button>
				<button type='button' class='btn btn-primary'>
					Right
				</button>
			</div>
			<div class='form-outline'>
				<input type='text' id='form12' class='form-control' />
				<label class='form-label' for='form12'>
					Example label
				</label>
			</div>
			<MDBInput label='Text input' id='typeText' type='text' />
		</>
	);
}

export default App;
