import React from 'react'
import axios  from 'axios'
import { GET_ERRORS , GET_PROJECTS , GET_PROJECT , UPDATE_PROJECT} from './types'


export const createProject =  (project, history) => async dispatch => {
    try {
      await axios.post('http://localhost:8080/v1/api/project/createProject', project)
      history.push("/");
    } catch (err) {
      console.log(err.response)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    }
  };

export const getProjects = () => async dispatch =>{
  try{

      const res = await axios.get('http://localhost:8080/v1/api/project/allProject')
                dispatch({
                  type : GET_PROJECTS,
                  payload : res.data
                })
  }catch(err){
      console.log(err)
  }
}

export const getProject =(id , history) => async dispatch =>{
  try{
    const res = await axios.get(`http://localhost:8080/v1/api/project/getProjectById/${id}`)
              dispatch({
                type : GET_PROJECT,
                payload : res.data
              })
    }catch(err){
      
  }
}

export const updateProject =  (project, history) => async dispatch => {
  try {
    await axios.put('http://localhost:8080/v1/api/project/updateProjectDetails', project)
    
  } catch (err) {
    history.push("/");
    // console.log(err.response)
    // dispatch({
    //   type: GET_ERRORS,
    //   payload: err.response.data
    // });
  }
};