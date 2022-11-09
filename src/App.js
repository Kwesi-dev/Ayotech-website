import './App.css';
import Navbar from './components/navbar/Navbar';
import TopBar from './components/Topbar/TopBar';
import About from './pages/homepage-sections/about/About';
import DigitalTransformation from './pages/homepage-sections/digitalTransformation/DigitalTransformation';
import HowWeDo from './pages/homepage-sections/how-we-do/HowWeDo';
import Intro from './pages/homepage-sections/intro/Intro';
import Portfolio from './pages/homepage-sections/portfolio/Portfolio';
import Services from './pages/homepage-sections/services/Services';

function App() {
  return (
    <div className="App">
      <header className="header">
        <TopBar/>
        <Navbar/>
      </header>
      <main>
        <Intro/>
        <Services/>
        <About/>
        <DigitalTransformation/>
        <HowWeDo/>
        <Portfolio/>
      </main>
    </div>
  );
}

export default App;
