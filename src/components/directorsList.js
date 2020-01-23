import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchMovies} from './actions/fetchDirectors'
// import {deleteDirector} from './actions/deleteDirector'


class Directors extends Component{
    componentDidMount(){
        this.props.fetchMovies();
    }
    // deleteDirector = () =>{
    //     console.log('clicked on delete')
    //     // this.props.deleteDirector();
    // }

    render(){
        const getmovies = this.props.director.map((directorsData)=>(
            <div key={directorsData.id}>
                <p>Director : {directorsData.director}</p>
                <button onClick={this.deleteDirector}>delete</button>

            </div>
        ));
        console.log(this);
        return (
            <div>
                <h1>directors list</h1>
                {getmovies}
            </div>
        );
    }
}

// const mapToActions{
//     fetchMovies,
//     deleteDirector
// }


const mapStateToProps = state =>({
    director:state.director.directors
 })
 
 export default connect(mapStateToProps, {fetchMovies})(Directors);

// export default Directors;
