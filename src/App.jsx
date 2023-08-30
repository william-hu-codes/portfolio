import './App.css';
import { useState, useEffect } from "react"

// IMPORT COMPONENTS
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Route, Routes } from "react-router-dom"
import ScrollButton from './components/ScrollButton/ScrollButton';

// IMPORT PAGES
import Home from './pages/home/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Projects';
import Error from "./pages/error/Error"

function App() {

//scroll button
const [showsScrolBtn, setShowScrolBtn] = useState(false);

  useEffect(() => {
    function handleButtonVisibility() {
      window.pageYOffset > 200 ? setShowScrolBtn(true) : setShowScrolBtn(false);
    };
  
    window.addEventListener("scroll", handleButtonVisibility);
    return () => {
      window.addEventListener("scroll", handleButtonVisibility);
    };
  }, []);
  console.log(showsScrolBtn)

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
      { showsScrolBtn && <ScrollButton /> }
    </div>
  );
}

export default App;
