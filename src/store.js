import { createStore, applyMiddleware,compose } from 'redux';
// import Reducer from './components/reducers/reducers.js';
import rootreducer from './components/reducers/rootreducers.js';
// import thunk from 'redux-thunk';
import rootSaga from 'F:/movies_redux/src/components/saga/saga.js';
import createSagaMiddleware from 'redux-saga';



const middleware = createSagaMiddleware();

const initialState ={}
const store = createStore(
    rootreducer,
    initialState,
    compose(
        applyMiddleware(middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));
// store.dispatch({ type: 'HELLO'})
middleware.run(rootSaga);
// middleware.run(deletedirector);
export default store;
