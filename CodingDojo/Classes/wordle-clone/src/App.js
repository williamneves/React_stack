import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Word from './components/Word';
import { MDBInput } from 'mdb-react-ui-kit';

function App() {
  const [ guesses, setGuesses ] = useState( [
    '     ',
    '     ',
    '     ',
    '     ',
    '     ',
  ]);
	const [word, setWord] = useState('');
	const [guested] = useState('world');

	const handleGuess = () => {
		setGuesses([...guesses, word]);
	};

	return (
		<div className='App'>
			<h1>Wordle Clone</h1>
			<div className='col-4 mx-auto row'>
				<div className='col-12'>
					{guesses.map((guess, index) => (
						<Word guess={guess} guested={guested} keyidx={index} />
					))}
				</div>
				<div className='col-12'>
          <input
            className='form-control mt-5'
            type='text'
            placeholder='Enter a word'
            onChange={ ( e ) => setWord( e.target.value ) }
          />
					<button className='btn btn-primary m-2' onClick={handleGuess}>
						Guess
          </button>
          <MDBInput label='Example label' id='form1' type='text' />
				</div>
			</div>
		</div>
	);
}

export default App;
