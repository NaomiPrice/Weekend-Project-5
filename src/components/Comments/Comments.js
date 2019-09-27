import React, { Component } from 'react';

class Comment extends Component {
    handleNext=()=>{

        this.props.history.push('/review');
    }

    render(){
        return(
            <div>
                <div>
                    Do you want to leave a comment?
                </div>
                <button onClick={this.handleNext}>NEXT</button>
            </div>
        )
    }
}

export default Comment;