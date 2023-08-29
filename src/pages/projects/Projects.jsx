import { useState, useEffect } from "react";
import "./Projects.css"
import images from "../../assets/images";

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

  // define a function that will return the JSX needed once we get the data
  function loaded() {
    return projects.map((project) => (
      <div className="project-div flex-ctr-ctr-col" >
        <h1>{project.name}</h1>
        <img className="project-img" src={project.image} />
        <div classNamed="buttons-div flex-ctr-ctr" >
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>live site</button>
          </a>
        </div>
      </div>
    ));
  };

  if (!projects) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="projects-grid-ctr" >
      {loaded()}
    </div>
  )
  // return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;

