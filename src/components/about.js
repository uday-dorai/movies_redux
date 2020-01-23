import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class About extends Component {
    render() {
        return (
            <div className='about' >
                <Link to='/movies'>
                    <button className='homeMovies'>Movies</button>
                </Link>
                <Link to='/directors'>
                    <button className='homeMovies'>Directors</button>
                </Link>

            </div>
        );
    }
}

export default About;