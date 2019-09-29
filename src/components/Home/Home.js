import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return(
            
            <div>
                <Link to="feeling">CLICK HERE TO BEGIN YOUR FEEDBACK</Link>
            </div>
        )
    }
}

export default Home;