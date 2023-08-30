import "./Footer.css"
import images from "../../assets/images"
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa"


function Footer(props) {
  console.log(images)
  
    return (
      <footer className="flex-ctr-ctr">
          <h4>Connect with me!</h4>
          <div className="social-media-ctr">
            <a href="https://www.linkedin.com/in/william-wl-hu" target="_blank" >
              <FaLinkedin style={{color: "black"}} size={25}/>
            </a>
            <a href="https://github.com/william-hu-codes" target="_blank" >
              <FaGithub style={{color: "black"}} size={25} />
            </a>
            <a href="mailto:william.hu307@gmail.com">
             <FaMailBulk style={{color: "black"}} size={25} />
            </a>
          </div>

      </footer>
    )
  }
  
  export default Footer;
  
  