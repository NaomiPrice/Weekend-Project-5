import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';

class ThankYou extends Component {

    handleNext = ()=>{
        //step to the next page
        this.props.history.push('/feeling')
    }

    render(){
        return(
            <div>
                
                <PageTitle pageTitle={'Thank you for your feedback!'}/>
                <button onClick={this.handleNext}>Leave New Feedback</button>
            </div>
            
        )
    }
}

export default ThankYou;