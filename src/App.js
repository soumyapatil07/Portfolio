import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/header';
import Sections from './Component/body/Sections';
import Skills from './Component/body/skills/skills';
import About from './Component/body/about/about';
import Testimonials from './Component/body/testimonials/testimonials';
import Contact from './Component/body/contact/contact';
import Footer from './Component/Footer/footer';
import Copyright from './Component/body/copyright/copyright';


function App() {
  return (
    <div className="App">

      <Header/>
      <Sections/>
      <Skills/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <Copyright/>
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
