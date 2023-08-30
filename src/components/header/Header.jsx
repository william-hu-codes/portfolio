import { Link } from "react-router-dom"
import "./Header.css"

export default function Header(props) {

    return (
        <header>
          {/* <h1>My Portfolio</h1> */}
          <nav>
            <Link className="link logo-ctr" to="/" >
              <img className="logo" src="https://i.imgur.com/JqRF8Em.png" alt="William Hu Logo" />
            </Link>
            <Link className="link" to="/">
              <h3 className="nav-text" >// HOME</h3>
            </Link>
            <Link className="link" to="/about">
              <h3 className="nav-text" >// ABOUT</h3>
            </Link>
            <Link className="link" to="/projects">
              <h3 className="nav-text" >// PROJECTS</h3>
            </Link>
          </nav>
        </header>
    );
}

