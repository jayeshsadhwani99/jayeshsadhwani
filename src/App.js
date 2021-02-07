import './stylesheets/App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects'

function App() {
  return (
    <div className="app">
      <Header />
      <Projects />
      <About />
    </div>
  );
}

export default App;
