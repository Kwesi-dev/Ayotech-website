import './App.css';
import Navbar from './components/navbar/Navbar';
import TopBar from './components/Topbar/TopBar';
import About from './pages/homepage-sections/about/About';
import Intro from './pages/homepage-sections/intro/Intro';
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
      </main>
    </div>
  );
}

export default App;
