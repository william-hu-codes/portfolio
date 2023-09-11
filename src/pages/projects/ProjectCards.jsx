export default function ProjectCards({project, idx}) {
  const toolsList = project.tools.map((tool, index) => <p key={index} className="tool">{tool}</p>)

    return (
        <div className="project-card" key={idx} >
          <div className="flex-ctr-ctr project-img-div">
            <img className="project-img" src={project.image} />
            <div className="project-tools">
              <h3 className="flex-ctr-ctr">Built with:</h3>
              <div className="flex-ctr-ctr tools-list-ctr">
                {toolsList}
              </div>
            </div>
          </div>
          <h2 className="flex-ctr-ctr" >{project.name}</h2>
          <p className="flex-ctr-ctr description">{project.description}</p>
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