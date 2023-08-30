import "./Home.scss"
// import { HiOutlineComputerDesktop } from "react-icons/hi2"
// import { MdComputer } from "react-icons/md"
import { TbDeviceImacCode } from "react-icons/tb"
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="home-ctr">
      {/* <HiOutlineComputerDesktop className="home-icon" /> */}
      {/* <MdComputer className="home-icon" /> */}
      <div className="intro-container">
        <h3 className="intro">Hello world, I'm</h3>
        <TbDeviceImacCode className="home-icon" />
      </div>
      <h1 className="name">William Hu</h1>
      <h2 className="title">I am a <span className="typed-text"></span></h2>
      {/* <h2 className="title input-wrapper typed-out">I am a <span className="input placeholder" >Software Developer</span></h2> */}
      {/* <h3 className="greeting">Nice to e-meet you!</h3> */}
      <h4>and Registered Nurse</h4>
      <div>
        <Link to="/projects" >
          <button>Learn more about me →</button>
        </Link>
      </div>
    </div>
  )
}
  
  export default Home;
  
  