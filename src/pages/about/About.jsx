import { useState, useEffect } from "react"
import { IoSchoolSharp } from "react-icons/io5"
import { IoRibbonSharp } from "react-icons/io5"
import SkillItem from "./SkillsItem"
import "./About.css"

export default function About(props) {

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

  const SkillsList = about?.skills.map((skill, idx) => <SkillItem skill={skill} key={idx} /> )
  // console.log(SkillsList)

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <section className="about-ctr-main flex-ctr-ctr-col" id="about" >
        <h3 className="flex-ctr-ctr intro">// GET TO KNOW MORE</h3>
        <h1 className="flex-ctr-ctr">ABOUT ME</h1>
      <div className="about-ctr" >
        <div className="about-title">
        </div>
        <div className="about-grid">
          <div className="headshot flex-ctr-ctr">
            <img src="https://i.imgur.com/EGzaLcX.png" alt="William Hu Headshot" />
          </div>
          <div className="education flex-ctr-ctr-col">
            <IoSchoolSharp className="react-icon"/>
            <div className="school flex-ctr-ctr-col">
              <h4>Bachelor of Science in Nursing (BScN)</h4>
              <p>// Western University</p>
            </div>
            <div className="school flex-ctr-ctr-col">
              <h4>Software Engineering Immersive Certificate</h4>
              <p>// General Assembly</p>
            </div>
          </div>
          <div className="skills flex-ctr-ctr-col">
            <IoRibbonSharp className="react-icon flex-ctr-ctr"/>
            <div className="skills-item-ctr">
              {SkillsList}
            </div>
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
  
  