import './App.css';

// IMPORT COMPONENTS
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom"

// IMPORT PAGES
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
