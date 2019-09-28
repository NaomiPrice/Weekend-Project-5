import React, { Component } from 'react';

class ThankYou extends Component {

    handleNext = ()=>{
        //step to the next page
        this.props.history.push('/feeling')
    }

    render(){
        return(
            <div>
                <div>
                    Thank you for submitting your feedback
                </div>
                <button onClick={this.handleNext}>Start Another Feedback</button>
            </div>
            
        )
    }
}

export default ThankYou;