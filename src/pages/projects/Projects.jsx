import { useState, useEffect } from "react";
import "./Projects.css"
import images from "../../assets/images";
import ProjectCards from "./ProjectCards";
import ScrollButton from "../../components/ScrollButton/ScrollButton";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  async function getProjectsData() {
		//make api call and get response
    const response = await fetch("./projects.json");
		// turn response into javascript object
    const data = await response.json();
		// set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getProjectsData() }, []);

  const projectsList = projects?.map((project, idx) => <ProjectCards project={project} idx={idx} />)

  // define a function that will return the JSX needed once we get the data
  function loaded() {
    return (
      <div className="projects">
        <div className="projects-grid-ctr" >
          {projectsList}
        </div>
      </div>
    )
  };

  return projectsList ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

