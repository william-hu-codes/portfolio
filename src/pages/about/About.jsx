import { useState, useEffect } from "react"
import { IoRibbonSharp } from "react-icons/io5"
import "./About.css"

function About(props) {

  //create state to hold about data
  const [about, setAbout] = useState(null)
  //create function to make api call
  async function getAboutData() {
    const response = await fetch("./about.json")
    const data = await response.json()
    setAbout(data)
  }

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() }, [])

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <section className="about-ctr-main" id="about">
        <h1 className="flex-ctr-ctr">ABOUT ME</h1>
        <h3 className="flex-ctr-ctr">// GET TO KNOW MORE</h3>
      <div className="about-ctr" >
        <div className="about-title">
        </div>
        <div className="about-grid">
          <div className="headshot flex-ctr-ctr">
            <img src="https://i.imgur.com/EGzaLcX.png" alt="William Hu Headshot" />
          </div>
          <div className="education flex-ctr-ctr-col">
            <IoRibbonSharp className="ribbon-icon"/>
          </div>
          <div className="skills flex-ctr-ctr-col">
            skills
          </div>
          <div className="bio">
            <p>{about.bio}</p>
          </div>
        </div>
      </div>
    </section>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}
  export default About;
  
  