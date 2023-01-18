import './App.css';
import { fetchCountries } from './services/countries.js';

function App() {
  fetchCountries();
  return <div className="App">;</div>;
}

export default App;
