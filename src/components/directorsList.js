import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchMovies,deleteDirector} from './actions/fetchDirectors'
// import {deleteDirector} from './actions/deleteDirector'


class Directors extends Component{
    componentDidMount(){
        this.props.fetchMovies();
    }
    deleteDirector = (e) =>{
        // console.log(e.target.parentElement.getAttribute('index'))
        const id =e.target.parentElement.getAttribute('index')
        this.props.deleteDirector(id);
        this.componentDidMount();
    }
    


    render(){
        const getmovies = this.props.director.map((directorsData)=>(
            <div key={directorsData.id} index={directorsData.id}>
                <p>Director : {directorsData.director}</p>
                <Link to={'/directors/'+(directorsData.id)+'/update'}>
                        <button>Update</button>
                </Link>
                <button onClick={this.deleteDirector}>delete</button>

            </div>
        ));
        // console.log(this);
        return (
            <div>
                <h1>directors list</h1>
                {getmovies}
            </div>
        );
    }
}


const mapStateToProps = state =>({
    director:state.director.directors
 })

 const mapDispatchToProps = {
    fetchMovies,
    deleteDirector
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Directors);

// export default Directors;
