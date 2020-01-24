// import {FETCH_MOVIES} from './types'

export const fetchMovies = () =>({
    type: 'FETCH_MOVIES',
});

export const deleteDirector = (id) =>({
    type: 'DELETE_DIRECTOR',
    id,
    // console.log('123');
});

export const addDirector = (data) =>{
    // console.log(data)
    return{
        type:'ADD_DIRECTOR',
        data
    }
}

export const updateDirector = (data) =>{
    console.log(data)
    return{
        type:'UPDATE_DIRECTOR',
        data,
    }
}

export const getSingleDirector = (id) =>{
    // console.log('getdata')
    // console.log(id)
    return{
        type:'GET_SINGLE_DIRECTOR',
        id
    }
}
