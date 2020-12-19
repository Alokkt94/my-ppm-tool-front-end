import Axios from "axios";
import React, { Component } from "react";
import { getProject, updateProject } from "../action/projectAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UpdateProject extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      projectName: "",
      projectIdentifier: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      errors:{}
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      projectName,
      projectIdentifier,
      projectDescription,
      startDate,
      endDate,
    } = nextProps.project;

    this.setState({
      id: id,
      projectName: projectName,
      projectIdentifier: projectIdentifier,
      projectDescription: projectDescription,
      startDate: startDate,
      endDate: endDate,
      
    });
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitData = (event) => {
    event.preventDefault();
    const update_project = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
    };
    this.props.updateProject(update_project, this.props.history);
  };

  render() {
    return (
      <div>
        <div className="register">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create / Edit Project form
                </h5>
                <hr />
                <form onSubmit={this.submitData}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      onChange={this.handleChange}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      value={this.state.projectIdentifier}
                      onChange={this.handleChange}
                      className="form-control form-control-lg"
                      name="projectIdentifier"
                      placeholder="Unique Project ID"
                      disabled
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      onChange={this.handleChange}
                      value={this.state.projectDescription}
                      name="projectDescription"
                      placeholder="Project Description"
                    ></textarea>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      onChange={this.handleChange}
                      value={this.state.startDate}
                      name="startDate"
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      onChange={this.handleChange}
                      value={this.state.startDate}
                      name="startDate"
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProp = (state) => ({
  project: state.project.project,
});

UpdateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  updateProject: PropTypes.func.isRequired,
};

export default connect(mapStateToProp, { getProject, updateProject })(
  UpdateProject
);
