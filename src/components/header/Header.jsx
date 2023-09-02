// import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
// import { HashLink } from "react-router-hash-link"

import "./Header.css"
import {GiSpermWhale} from "react-icons/gi"

export default function Header(props) {

    return (
        <header>
          <nav>
            <NavHashLink className="logo-ctr" smooth to="/#home" >
              {/* <img className="logo" src="https://i.imgur.com/JqRF8Em.png" alt="William Hu Logo" /> */}
              < GiSpermWhale className="logo" />
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#home" >
              {/* <h3 className="nav-text" >// HOME</h3> */}
              // HOME
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#about" >
              {/* <h3 className="nav-text" >// ABOUT</h3> */}
              // ABOUT
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#projects" >
              {/* <h3 className="nav-text" >// PROJECTS</h3> */}
              // PROJECTS
            </NavHashLink>
          </nav>
        </header>
    );
}

