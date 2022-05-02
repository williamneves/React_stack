import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard';

function App() {
  return (
    <div>
      
        <PersonCard data={{
          firstName:`Doe`,
          lastName:`Jane`,
          age:`45`,
          hairColor:`Black`,
          }}/>
        <PersonCard data={{
          firstName:`John`,
          lastName:`Smith`,
          age:`88`,
          hairColor:`Brown`,
          }}/>
        <PersonCard data={{
          firstName:`Millard`,
          lastName:`Fillmore`,
          age:`50`,
          hairColor:`Brown`,
          }}/>
        <PersonCard data={{
          firstName:`Maria`,
          lastName:`Smith`,
          age:`62`,
          hairColor:`Brown`,
          }}/>
      
    </div>
  );
}

export default App;
