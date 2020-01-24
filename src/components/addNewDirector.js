import React,{Component} from 'react';
import { Link,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {addDirector} from './actions/fetchDirectors'



class AddNewDirector extends Component{
    
    
    onSubmit = async (e) =>{
        e.preventDefault();
        console.log(e.target[0].value);
        const name = e.target[0].value;
        // console.log(name)
        const data={
            director:e.target[0].value
        }
        this.props.addDirector(data);
        console.log(this.props);
        this.props.history.push("/directors");
    
            
    }
    

    render(){
        // const {director} = this.state
        return (
            <div>
                <h3>Enter new Director to the List</h3>
                <form onSubmit = {this.onSubmit} className='addDirectorForm'>
                    <input type='text' 
                    className='addNewDirector' 
                    placeholder ='Add director' 
                    name="director"
                    // value={this.state.director}
                    // onChange ={this.changeHandler}
                    />
                        
                    <button type='submit' className='addBtnDirectorAndMovies' >+add</button>
                    {/* <Link to='/directors'>
                        <button className='addBtnDirectorAndMovies' >cancel</button>    
                    </Link> */}
                    
                </form>
                
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return {
        director:state.director.directors
    }
    
 }

 const mapDispatchToProps = {
    addDirector
    // fetchMovies,
    // deleteDirector
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddNewDirector));

// export default AddNewDirector;