import React, { Component } from 'react';

class Understanding extends Component {
    state = {

    }

    handleNext=()=>{

        this.props.history.push('/support');
    }

    render(){
        return(
            <div>
                <div>
                    Do you understand?
                </div>
                <button onClick={this.handleNext}>NEXT</button>
            </div>
        )
    }
}

export default Understanding;