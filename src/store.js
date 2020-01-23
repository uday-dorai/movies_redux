import { createStore, applyMiddleware } from 'redux';
// import Reducer from './components/reducers/reducers.js';
import rootreducer from './components/reducers/rootreducers.js';
// import thunk from 'redux-thunk';
import fetchMovies from 'F:/movies_redux/src/components/saga/saga.js';
import createSagaMiddleware from 'redux-saga';



const middleware = createSagaMiddleware();

const initialState ={}
const store = createStore(rootreducer,initialState,applyMiddleware(middleware));
// store.dispatch({ type: 'HELLO'})
middleware.run(fetchMovies);
// middleware.run(deletedirector);
export default store;
