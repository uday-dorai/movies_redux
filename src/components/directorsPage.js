import React, { Component } from 'react';
import Directors from './directorsList.js';
import { Link } from 'react-router-dom';


class DirectorsPage extends Component {
    render() {
        return (
                <div className="moviesAndDirectorPage">
                <h1>Directors List</h1>
                
                <Link to='/directors/new'>
                    <button className='addBtnForDirectorAndMovies'>+ add new Director to the List</button>
                </Link>
                <Directors />
            </div> 
        );
    }
}

 
 export default DirectorsPage;


