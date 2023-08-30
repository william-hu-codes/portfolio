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
      <TbDeviceImacCode className="home-icon" />
      {/* <h3 className="intro">Hi there, my name is</h3> */}
      <h1 className="name">William Hu</h1>
      <h2 className="title">I am a <span className="typed-text"></span></h2>
      {/* <h2 className="title input-wrapper typed-out">I am a <span className="input placeholder" >Software Developer</span></h2> */}
      {/* <h3 className="greeting">Nice to e-meet you!</h3> */}
      <Link to="/projects" >
      <button>Check out my work →</button>
      </Link>
    </div>
  )
}
  
  export default Home;
  
  