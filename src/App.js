import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Sections from './Component/body/Sections';

function App() {
  return (
    <div className="App">

      <Header/>
      <Sections/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Soumya Patil
        </a>
      </header> */}
    </div>
  );
}

export default App;
