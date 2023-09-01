export default function ProjectCards({project, idx}) {
  const toolsList = project.tools.map((tool, idx) => <p key={idx} >{tool}</p>)

    return (
        <div className="project-card" key={idx} >
          <div className="flex-ctr-ctr project-img-div">
            <img className="project-img" src={project.image} />
          </div>
          <h2 className="flex-ctr-ctr" >{project.name}</h2>
          <div className="buttons-div flex-ctr-ctr" >
            <a href={project.git}>
              <button>// GitHub</button>
            </a>
            <a href={project.live}>
              <button>// Live Site</button>
            </a>
          </div>
          {/* <div className="tools-list">
            {toolsList}
          </div> */}
        </div>
      )
    }