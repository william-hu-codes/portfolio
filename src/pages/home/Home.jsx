import "./Home.scss"
// import { HiOutlineComputerDesktop } from "react-icons/hi2"
// import { MdComputer } from "react-icons/md"
import resume from "../../assets/files/William-Hu-Fullstack-Software-Developer.pdf"
import { TbDeviceImacCode } from "react-icons/tb"
import { HiDownload } from "react-icons/hi"
import { Link } from "react-router-dom"


function Home(props) {
  return (
    <div className="home-ctr" id="home" >

      <div className="intro-container">
        <h3 className="intro">Hello world, I'm</h3>
        <TbDeviceImacCode className="home-icon" />
      </div>
      <h1 className="name">William Hu</h1>
      <h2 className="title">I am a <span className="typed-text"></span></h2>
      <a className="resume-download" href={resume} download>
        <button>
          <div className="flex-ctr-ctr">
            <p>Download my CV</p> 
            <HiDownload />
          </div>
        </button>
      </a>
    </div>
  )
  
}
  export default Home;
  