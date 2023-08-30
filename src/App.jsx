import './App.css';
import { useState, useEffect } from "react"

// IMPORT COMPONENTS
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/Main/Main';
import ScrollButton from './components/ScrollButton/ScrollButton';

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
      <Main />
      <Footer />
      { showsScrolBtn && <ScrollButton /> }
    </div>
  );
}

export default App;
