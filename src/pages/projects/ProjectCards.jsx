export default function ProjectCards({project, key}) {
    return (
        <div className="project-card" >
          <h2 className="flex-ctr-ctr" >{project.name}</h2>
          <div className="flex-ctr-ctr project-img-div">
            <img className="project-img" src={project.image} />
          </div>
          <div className="buttons-div flex-ctr-ctr" >
            <a href={project.git}>
              <button>// GitHub</button>
            </a>
            <a href={project.live}>
              <button>// Live Site</button>
            </a>
          </div>
        </div>
      )
    }