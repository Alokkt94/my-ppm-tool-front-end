import { GET_ERRORS }  from '../action/types'

const initalState = {}

const errorReducer = ( state = initalState , action ) =>{

    switch(action.type){
        case "GET_ERRORS":
            return{
             payload : action.payload
            }
        default:
            return state
    }
}

export default errorReducer