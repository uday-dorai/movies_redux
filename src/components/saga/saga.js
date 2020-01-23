import { FETCH_MOVIES, FETCH_MOVIE } from '../actions/types'
import { put, takeEvery } from 'redux-saga/effects'
// import Api from '...'


// let payload;
function* workerSaga() {
    console.log('workersaga')
    
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

export default function* fetchMovies() {
    console.log('saga')
    yield takeEvery('FETCH_MOVIES', workerSaga)
}

// export default function* deletedirector() {
//     console.log('saga')
//     // yield takeEvery('FETCH_MOVIES', deleteDirectorWorker)
// }


// export default {fetchMovies}
