import React, { Component } from "react";
import "./DashBoard.css";
import ProjectItem from "../../Project/ProjectItem";
import CreateProjectButton from "../../Project/CreateProjectButton";
import {connect} from 'react-redux';
import  { getProjects }  from '../../action/projectAction'
import PropTypes from 'prop-types';

class DashBoard extends Component {


  componentDidMount(){
    this.props.getProjects();
  }

  render() {

    const { projects } = this.props.projects

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />
              <CreateProjectButton />
              <br />
              <hr/>
              {projects.map(project => (
                <ProjectItem key={project.id} project={project} />
              ))}
             </div> 
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state =>({
  projects : state.project
})

DashBoard.propTypes = {
  getProject : PropTypes.func.isRequired,
  project : PropTypes.object.isRequired
}

export default connect(mapStateToProps,{ getProjects })(DashBoard);
