import React from 'react'
import './Project.css'
import { Link } from 'react-router-dom'

function ProjectItem({project}) {

    return (
        <div className="container">
        <div className="card card-body bg-light mb-3">
          <div className="row">
            <div className="col-2">
              <span className="mx-auto">{project.projectName}</span>
            </div>
            <div className="col-lg-6 col-md-4 col-8">
              <h3>{project.projectIdentifier}</h3>
              <p>
                {project.projectDescription}
              </p>
            </div>
            <div className="col-md-4 d-none d-lg-block ">
              <ul className="list-group">
                <a className ="ProjectItem__project_board" href="#">
                  <li className="list-group-item board">
                    <i className="fa fa-flag-checkered ">
                      <span className="ml-2">Project Board</span>
                    </i>
                  </li>
                </a>
                <Link className="ProjectItem__update_project" to={`updateProject/${project.projectIdentifier}`}>
                  <li className="list-group-item update">
                    <i className="fa fa-edit">
                      <span className="ml-2" >Update Project Info</span>
                    </i>
                  </li>
                </Link>
                <a  className="ProjectItem__delete_project" href="#">
                  <li className="list-group-item delete">
                    <i className="fa fa-minus-circle">
                      <span className="ml-2">Delete Project</span>
                    </i>
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProjectItem
