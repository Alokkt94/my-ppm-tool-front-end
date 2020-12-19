import { GET_PROJECTS }  from '../action/types'
import { GET_PROJECT }  from '../action/types'

const initalState = {
    projects : [],
    project : {}
};

const projectReducer = ( state = initalState , action ) =>{

    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
             projects : action.payload
            }
        case GET_PROJECT:
                return{
                    ...state,
                 project : action.payload
                }
        default:
            return state
    }
}

export default projectReducer