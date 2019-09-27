import React, { Component } from 'react';

class Support extends Component {

    handleNext=()=>{

        this.props.history.push('/comments');
    }
    render(){
        return(
            <div>
                <div>
                    Do you feel Supported?
                </div>
                <button onClick={this.handleNext}>NEXT</button>
            </div>
        )
    }
}

export default Support;