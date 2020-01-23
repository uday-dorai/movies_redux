import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {updateDirector,getSingleDirector} from './actions/fetchDirectors'


class UpdateDirector extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         director:'',
    //     }
    // }
    componentDidMount() {
        // console.log(this.props.match.params.id)
        const id = this.props.match.params.id
        const singledirector = this.props.getSingleDirector(id)
        console.log(singledirector);
        // await fetch(`http://localhost:8000/api/directors/${this.props.match.params.id}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         this.setState({director:data.director});
        //         console.log(this.state)
        //     })
            // this.props.updateDirector();
            console.log(this.props);
        
    }
    
    
    // changeHandler=(e) => {
    //     console.log(e.target.value);
    //     // console.log(this.props.match.params.id)
    //     this.setState({[e.target.name]:e.target.value})
    // }
    
    onSubmit = async (e) =>{
        e.preventDefault();
        const id = this.props.match.params.id;
        const data={
            id:id,
            director:e.target[0].value
        }
        // console.log(id)
        // console.log(this.state.director);
        // const directorName=this.state;
        // console.log(e.target.parentNode);
        // const url = `http://localhost:8000/api/directors/${this.props.match.params.id}`;
        // await fetch(url, {
        //     method: 'PUT',
        //     headers: {
        //         Accept: "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(directorName),
        // })
        // .then(res =>{
        //     if(res.ok){
        //         alert('director has been updated')
        //     }
        // })
        // .then(backToDirectorsPage => {
        //     this.props.history.push("/directors/");
        // })

        this.props.updateDirector(data);
            
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
                    // value={this.state.director}
                    // onChange ={this.changeHandler}
                    // defaultValue={this.state}
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
    getSingleDirector
    // fetchMovies,
    // deleteDirector
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(UpdateDirector);
// export default UpdateDirector;