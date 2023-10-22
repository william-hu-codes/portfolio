import "./Footer.css"
import images from "../../assets/images"
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa"


function Footer(props) {
  // console.log(images)
  
    return (
      <footer className="flex-ctr-ctr">
          <h5 className="footer-text">© William Hu, 2023</h5>
          <h5 className="footer-text">|</h5>
          {/* <h5 className="footer-text">® 2023</h5> */}
          <a className="blog-link" href="https://william-hu-codes.com/"><h5 className="footer-text">my-blog</h5></a>
          <h5 className="footer-text">|</h5>
          {/* <h5 className="footer-text">→</h5> */}
          <div className="social-media-ctr">
              <a href="https://www.linkedin.com/in/william-wl-hu" target="_blank" >
                <FaLinkedin className="social-media-icon" />
              </a>
              <a href="https://github.com/william-hu-codes" target="_blank" >
                <FaGithub className="social-media-icon"/>
              </a>
              <a href="mailto:william.hu307@gmail.com" target="_blank">
                <FaMailBulk className="social-media-icon" />
              </a>
          </div>
      </footer>
    )
  }
  
  export default Footer;
  
  