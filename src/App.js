import './App.css';
import Navbar from './components/navbar/Navbar';
import TopBar from './components/Topbar/TopBar';

function App() {
  return (
    <div className="App">
      <header className="header">
        <TopBar/>
        <Navbar/>
      </header>
    </div>
  );
}

export default App;
