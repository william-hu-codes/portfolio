import "./Footer.css"
import images from "../../assets/images"

function Footer(props) {
  console.log(images)
    return (
      <footer className="flex-ctr-ctr">
          <h4>Connect with me!</h4>
          <div className="social-media-ctr">
            <a href="https://www.linkedin.com/in/william-wl-hu" target="_blank" >
              <img className="social-media-icon" src={images.linkedInIcon} />
            </a>
            <a href="https://github.com/william-hu-codes" target="_blank" >
              <img className="social-media-icon" src={images.gitHubIcon} />
            </a>
            <a href="mailto:william.hu307@gmail.com">
              <img className="social-media-icon" src={images.emailIcon} />
            </a>
          </div>

      </footer>
    )
  }
  
  export default Footer;
  
  