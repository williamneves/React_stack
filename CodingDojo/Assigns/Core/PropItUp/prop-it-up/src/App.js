import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
        <PersonCard data={{
          firstName:`Doe`,
          lastName:`Jane`,
          age:45,
          hairColor:`Black`,
          }}/>
        <PersonCard data={{
          firstName:`John`,
          lastName:`Smith`,
          age:88,
          hairColor:`Brown`,
          }}/>
      
    </div>
  );
}

export default App;
