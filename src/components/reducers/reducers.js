import {FETCH_MOVIE} from '../actions/types'
import {DELETE_DIRECTOR} from '../actions/types'

const initialState ={
    directors:[]
  }

  export default function reducers(state=initialState,action){
  switch(action.type){
    case FETCH_MOVIE:
      // console.log(action.payload);
      return {
        // ...state,
        directors:action.payload
      };
      // case DELETE_DIRECTOR:
      // // console.log(action.payload);
      //   return {
      //     // ...state,
      //     directors:action.payload
      //   };
    default:
        return state;
    } 
  }

//  reducer;