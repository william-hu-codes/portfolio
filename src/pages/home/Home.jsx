import "./Home.scss"
// import { HiOutlineComputerDesktop } from "react-icons/hi2"
// import { MdComputer } from "react-icons/md"
import { TbDeviceImacCode } from "react-icons/tb"
import { HiDownload } from "react-icons/hi"
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="home-ctr" id="home" >

      <div className="intro-container">
        <h3 className="intro">Hello world, I'm</h3>
        <TbDeviceImacCode className="home-icon" />
      </div>
      <h1 className="name">William Hu</h1>
      <h2 className="title">I am a <span className="typed-text"></span></h2>
      <button>
        <a href="../../assets/files/william-hu-resume.pdf" download>
          <div className="flex-ctr-ctr" >
            Download my CV <HiDownload />
          </div>
        </a>
      </button>
    </div>
  )
}
  
  export default Home;
  
  