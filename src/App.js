import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HeaderTag from './components/header.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about.js';
import DirectorsPage from './components/directorsPage.js';
import { Provider } from 'react-redux';
import store from './store';
import AddNewDirector from './components/addNewDirector';
import UpdateDirector from './components/updateDirector';
import GetSingleDirector from './components/getSingleDirector';




function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <HeaderTag />
          <Switch>

            <Route path="/" exact component={About} />
            <Route path="/directors" exact component={DirectorsPage} />

            <Route path="/directors/new" component={AddNewDirector} />            
            <Route path="/directors/:id/update" component={UpdateDirector} />            
                                    
            <Route path="/directors/:id" component={GetSingleDirector} />  

          </Switch>

        </div>
      </Router>
    </Provider>
  );
}

export default App;
