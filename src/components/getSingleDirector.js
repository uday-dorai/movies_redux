import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getSingleDirector} from './actions/fetchDirectors'



class GetSingleDirector extends Component{
    componentDidMount() {
        const id =  this.props.match.params.id;
        this.props.getSingleDirector(id)
    }
   
    

    render(){
        
        return (
            <div className='addDirectorContainer'>
                <h3>Director at Id : {this.props.match.params.id}</h3>
                <div className="singleDirector">

                    <p name="Director"
                    >Director : {this.props.director.director}</p>
                    
                    <Link to='/directors'>
                        <button className='addBtnDirector' >back</button>
                    </Link>
                    
                    
                </div>
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    console.log(state.director.director.director);
    return {
        director:state.director.director,
        
    }
}
export default connect(mapStateToProps, {getSingleDirector})(GetSingleDirector);
// export default GetSingleDirector;


