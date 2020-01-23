// import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types'
import { put, takeEvery,all,fork } from 'redux-saga/effects'






// fetch director watcher
function* fetchMovies() {
    // console.log('saga')
    yield takeEvery('FETCH_MOVIES', workerSaga)
}

// fetch director watcher
function* workerSaga() {
    // console.log('workersaga')
    
    const url = "http://localhost:8000/api/directors";
    const payload = yield fetch(url, {
                method: "GET",
            })
            .then(res => {
                // console.log('11')
                return res.json();
            });
    // console.log(payload);
    yield put({ type: "FETCH_MOVIE", payload });
}




//  delete director watcher
function* deletedirector() {
    // console.log('director')
    yield takeEvery('DELETE_DIRECTOR', deleteDirectorWorker)
}

//  delete director worker
function* deleteDirectorWorker(data) {
    // console.log('worker')
    // console.log(data.id)
    
    
    const url = `http://localhost:8000/api/directors/${data.id}`;
    const payload = yield fetch(url, {
                method: 'DELETE'
            })
            .then(workerSaga())

    console.log(payload);
    yield put({ type: "DELETE_SUCCESSFUL",});
}



/////////////////

//  add director Watcher
function* addDirector() {
    // console.log('director')
    yield takeEvery('ADD_DIRECTOR', addDirectorWorker)
}
//  add director worker
function* addDirectorWorker(data) {
    // console.log('worker')
    // console.log(data.data)

    const url = `http://localhost:8000/api/directors`;
    const payload = fetch(url, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data.data),
        })
        .then(res =>{
            if(res.ok){
                alert('director has been added to the list')
                // workerSaga();
            }
        })

    // console.log(payload);
    yield put({ type: "ADD_DIRECTOR_SUCCESS",payload});
}

//////////

//  get singleDirector watche
function* getSingleDirector() {
    // console.log('singleDirector')
    yield takeEvery('GET_SINGLE_DIRECTOR', getSingleDirectorWorker)
}
//  get singleDirector worker
function* getSingleDirectorWorker(id) {
    // console.log(id.id)
    // console.log('singleDirectorWorker')
    const url = `http://localhost:8000/api/directors/${id.id}`;
    const payload = yield fetch(url, {
                method: "GET",
            })
            .then(res => {
                return res.json();
            });
    // console.log(payload)
    yield put({ type: "GET_SINGLE_DIRECTOR_SUCCESSFUL",payload});
    
}

/////////////

// update director watcher
function* updateDirector() {
    // console.log('updatedirector')
    yield takeEvery('UPDATE_DIRECTOR', updateDirectorWorker)
}

// update director worker
function* updateDirectorWorker(data) {
    console.log('worker')
    // console.log(data.data.director)
    const id = data.data.id;
    const directorName = {director:data.data.director}
    const url = `http://localhost:8000/api/directors/${id}`;
    const payload = fetch(url, {
                        method: 'PUT',
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(directorName),
                    })
                    .then(res =>{
                        if(res.ok){
                            alert('director has been updated')
                        }
                    })

                    console.log(payload);
}


export default function* rootSaga() {
    yield all([
      fork(fetchMovies),
      fork(deletedirector),
      fork(addDirector),
      fork(updateDirector),
      fork(getSingleDirector),
    ]);
  }
