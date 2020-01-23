import React,{Component} from 'react';
import { Link } from 'react-router-dom';



class GetSingleDirector extends Component{
    constructor(props){
        super(props);
        this.state={
            Director:'',
            
        }
    }
    async componentDidMount() {
        await fetch(`http://localhost:8000/api/directors/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    Director:data.director,
                });
                // console.log(this.state)
            })
            // .catch(error =>{
            //     alert(error);
            // })
    }
   
    

    render(){
        // const {director} = this.state
        return (
            <div className='addDirectorContainer'>
                <h3>Director at Id : {this.props.match.params.id}</h3>
                <div className="singleDirector">

                    <p name="Director"
                    >Director : {this.state.Director}</p>
                    
                    <Link to='/directors'>
                        <button className='addBtnDirector' >back</button>
                    </Link>
                    
                    
                </div>
                
            </div>
        );
    }
}

export default GetSingleDirector;


