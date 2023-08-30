import "./Home.scss"


function Home(props) {
  return (
    <div className="home-ctr">
      <h3 className="intro">Hi there, my name is</h3>
      <h1 className="name">William Hu</h1>
      <h2 className="title">I am a <span className="typed-text"></span></h2>
      {/* <h2 className="title input-wrapper typed-out">I am a <span className="input placeholder" >Software Developer</span></h2> */}
      <h3 className="greeting">Nice to e-meet you!</h3>
    </div>
  )
}
  
  export default Home;
  
  