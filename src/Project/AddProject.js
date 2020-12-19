import React, { Component } from "react";
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import  { createProject }  from '../action/projectAction'

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      projectName: "",
      projectIdentifier: "",
      projectDescription: "",
      startDate: "",
      endDate: "",
      errors:{}
    };
  }

  componentWillReceiveProps(nextProps){
      if(nextProps.errors){
          this.setState({
            errors :  nextProps.errors.payload
          })
      }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitData = (event) => {
      event.preventDefault();
    const newProject = {
      projectName: this.state.projectName,
      projectIdentifier: this.state.projectIdentifier,
      projectDescription: this.state.projectDescription,
      startDate: this.state.startDate,
      endDate: this.state.endDate
    };
    this.props.createProject(newProject , this.props.history);
  };

  render() {

    const {errors} = this.state


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
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.handleChange}
                    />
                    <p style={{ color : "red"}}>{errors.projectName}</p>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      value={this.state.projectIdentifier}
                      onChange={this.handleChange}
                    />
                    <p  style={{ color : "red"}}>{errors.projectIdentifier}</p>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="projectDescription"
                      value={this.state.projectDescription}
                      onChange={this.handleChange}
                    ></textarea>
                    <p style={{ color : "red"}}>{errors.projectDescription}</p>
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="startDate"
                      value={this.state.startDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="endDate"
                      value={this.state.endDate}
                      onChange={this.handleChange}
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


const mapStateToProps = state => ({
  errors : state.errors
})


AddProject.propTypes = {
  createProject : PropTypes.func.isRequired,
  errors : PropTypes.object.isRequired
}


export default connect(mapStateToProps,{createProject})(AddProject);
