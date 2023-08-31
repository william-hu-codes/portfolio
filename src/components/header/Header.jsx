// import { Link } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"
// import { HashLink } from "react-router-hash-link"

import "./Header.css"
import {GiSpermWhale} from "react-icons/gi"

export default function Header(props) {

    return (
        <header>
          {/* <h1>My Portfolio</h1> */}
          <nav>
            <NavHashLink className="link logo-ctr" smooth to="/#home" >
              {/* <img className="logo" src="https://i.imgur.com/JqRF8Em.png" alt="William Hu Logo" /> */}
              < GiSpermWhale className="logo" />
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#home">
              <h3 className="nav-text" >// HOME</h3>
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#about">
              <h3 className="nav-text" >// ABOUT</h3>
            </NavHashLink>
            <NavHashLink className="link" smooth to="/#projects">
              <h3 className="nav-text" >// PROJECTS</h3>
            </NavHashLink>
          </nav>
        </header>
    );
}

