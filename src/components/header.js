import React from 'react'
import { Link } from 'react-router-dom';

function headerTag(){
    return (
        <div className='header'>
            <Link to='/'>
                <button className='homeButton'>Home</button>
            </Link>
            <h1>Movies and Director</h1>
        </div>
    );   
}
export default headerTag; 