// import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types'
import { put, takeEvery, all, fork, takeLatest, call } from 'redux-saga/effects'


// fetch director watcher
function* fetchMovies() {
    console.log('saga')
    yield takeEvery('FETCH_MOVIES', workerSaga)
}

// fetch director watcher
function* workerSaga() {
    console.log('workersaga')

    const url = "http://localhost:8000/api/directors";
    const payload = yield fetch(url, {
        method: "GET",
    })
        .then(res => {
            console.log('11')
            return res.json();
        });
    console.log(payload);
    yield put({ type: "FETCH_MOVIE", payload });
}




//  delete director watcher
function* deletedirector() {
    // console.log('director')
    yield takeEvery('DELETE_DIRECTOR', deleteDirectorWorker)
}

//  delete director worker
function* deleteDirectorWorker(data) {
    const url = `http://localhost:8000/api/directors/${data.id}`;
    yield fetch(url, {
        method: 'DELETE'
    })
    // .then(res =>{
    //     if (res.ok) {
    //         alert(' director has been deleted')
    //     }
    // })
    yield call(workerSaga)
    
}



/////////////////
let payload;
//  add director Watcher
function* addDirector() {
    // console.log('director')
    yield takeLatest('ADD_DIRECTOR', addDirectorWorker)
}
//  add director worker
function* addDirectorWorker(data) {
    // console.log(data)
    console.log(data)
    const detail = data.data
    const url = `http://localhost:8000/api/directors`;
    yield fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(detail),
    })
    .then(res =>{
        if (res.ok) {
            alert('new director has been added')
        }
    })
    
    yield call(workerSaga)
    
}

//////////

//  get singleDirector watche
function* getSingleDirector() {
    // console.log('singleDirector')
    yield takeEvery('GET_SINGLE_DIRECTOR', getSingleDirectorWorker)
}
//  get singleDirector worker
function* getSingleDirectorWorker(id) {
    const url = `http://localhost:8000/api/directors/${id.id}`;
    payload = yield fetch(url, {
        method: "GET",
    })
        .then(res => {
            return res.json();
        });
    console.log(payload)
    yield put({ type: "GET_SINGLE_DIRECTOR_SUCCESSFUL", payload });

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
    const directorName = { director: data.data.director }
    const url = `http://localhost:8000/api/directors/${id}`;
    yield fetch(url, {
        method: 'PUT',
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(directorName),
    })
        .then(res => {
            if (res.ok) {
                alert('director has been updated')
            }
        })
    yield call(workerSaga)
    
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
