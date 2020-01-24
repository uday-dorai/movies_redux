import {FETCH_MOVIE} from '../actions/types'
import {ADD_DIRECTOR_SUCCESS} from '../actions/types'
import {GET_SINGLE_DIRECTOR_SUCCESSFUL} from '../actions/types'

const initialState ={
    directors:[],
    director:{}
  }

  export default function reducers(state=initialState,action){
  switch(action.type){
    case FETCH_MOVIE:
      // console.log(action);
      return {
        ...state,
        directors:action.payload
      };
      // case ADD_DIRECTOR_SUCCESS:
      //   console.log('ADD_DIRECTOR_SUCCESS')
      //   console.log(action.value);
      //     return {
      //       ...state,
      //       director:action.value
      //     };
      case GET_SINGLE_DIRECTOR_SUCCESSFUL:
        console.log(action.payload);
        return {
          ...state,
          director:action.payload
        };
    default:
        return state;
    } 
  }

//  reducer;