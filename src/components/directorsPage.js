import React, { Component } from 'react';
import Directors from './directorsList.js';
import { Link } from 'react-router-dom';






class DirectorsPage extends Component {
    // state = {
    //     director: [],
    // };

    // fetch directorlist
    // async componentDidMount() {
    //     // await fetch('http://localhost:8000/api/directors')
    //     //     .then(response => response.json())
    //     //     .then(data => (this.setState({ director: data })))
    // }


    // Delete Single Director
    // delete = async (e) => {
    //     // console.log('are u sure');
    //     const id = e.target.parentElement.parentElement.getAttribute('position');
    //     const url = `http://localhost:8000/api/directors/${id}`;
    //     await fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //         }).catch(error => {
    //             console.log('error')
    //         })
    //     await this.componentDidMount();
    // }
    
    


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


