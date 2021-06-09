import logo from './logo.svg';
import './App.css';
import StateOne from './Component';
import Emailist from './EmailAPI';
import Emailist1 from './EmailAPI1';
import Emailist2 from './EmailAPI2';

function App() {
  return (
    <div className="App">
      <StateOne />
      <Emailist />
      <Emailist1 />
      <Emailist2 />
    </div>
  );
}

export default App;
