import React, { Component } from 'react';

class ReviewPage extends Component {

    handleSubmit = ()=>{
        this.props.history.push('/thank-you');
    }
    render(){
        return(
            <div>
                <div>
                    Does everythign look right?
                </div>
                <button onClick={this.handleSubmit}>SUBMIT</button>

            </div>
        )
    }
}

export default ReviewPage;