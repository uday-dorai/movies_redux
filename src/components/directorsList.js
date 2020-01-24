import React, {Component} from 'react';
import { Link ,withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {fetchMovies,deleteDirector} from './actions/fetchDirectors'
// import {deleteDirector} from './actions/deleteDirector'


class Directors extends Component{
    async componentDidMount(){
        // console.log('recived')
        this.props.fetchMovies();
    }
     deleteDirector = async (e) =>{
       // e.preventDefault();
        // console.log(e.target.parentElement)
        const id =e.target.parentElement.getAttribute('index')
        this.props.deleteDirector(id);
    }
    
    


    render(){
       
        return (
            <div>
                <h1>directors list</h1>
                {this.props.director.map((directorsData)=>(
            <div key={directorsData.id} index={directorsData.id}>
                <p>Director : {directorsData.director}</p>
                <Link to={'/directors/'+(directorsData.id)+'/update'}>
                        <button>Update</button>
                </Link>
               
                    <button onClick={this.deleteDirector}>delete</button>
              
                

            </div>
        ))}
            </div>
        );
    }
}


const mapStateToProps = state =>{
    console.log(state);
    return {
        director:state.director.directors,
        // newdirector:state.director.director,
    }
}

 const mapDispatchToProps = {
    fetchMovies,
    deleteDirector
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Directors));

// export default Directors;
