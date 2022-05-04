import logo from './logo.svg';
import './App.css';

function App() {
	const message = 'loren ipsum';
  let body = document.getElementsByTagName('body')[0]
  body.style.backgroundColor = 'red'
	return (
		<div className='App'>
			<h1>{message}</h1>
    </div>
	);
}

export default App;
