import { Route, Routes } from "react-router-dom"
import "./Main.css"

// IMPORT PAGES
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Projects from "../../pages/projects/Projects";
import Error from "../../pages/error_404/Error";
import Contact from "../../pages/contact/Contact";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route exact path="/" element={ 
                    <>
                        <Home />
                        <Projects />
                        <About />
                        <Contact />
                    </>
                }/>
                <Route path="/*" element={<Error />} />
            </Routes>
        </main>
    )
}