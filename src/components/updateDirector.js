import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateDirector,getSingleDirector} from './actions/fetchDirectors'


class UpdateDirector extends Component{
    onSubmit = async (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const data={
            id:id,
            director:e.target[0].value
        }
        await this.props.updateDirector(data);
        await this.props.history.push('/directors') 
    }
    

    render(){
        // const {director} = this.state
        return (
            <div className='addDirectorContainer'>
                <h3><u>update Director</u></h3>
                <form onSubmit={this.onSubmit}>
                    <input type='text' 
                    className='addNewDirector' 
                    placeholder ='Update director' 
                    name="director"
                    
                    />
                    <button type='submit' className='addBtnDirectorAndMovies' >update</button>

                    <Link to='/directors'>
                        <button className='addBtnDirectorAndMovies' >cancel</button>    
                    </Link>
                    
                </form>
                
            </div>
        );
    }
}
const mapStateToProps = state =>({
    director:state.director.directors
 })

 const mapDispatchToProps = {
    updateDirector,
    // getSingleDirector
    // fetchMovies,
    // deleteDirector
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(UpdateDirector);
