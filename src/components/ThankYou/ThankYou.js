import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class ThankYou extends Component {

    handleNext = ()=>{
         //empty redux feedbackReducer state
        this.props.dispatch({type: 'EMPTY_STATE'})
        //step to the beginnign again
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

export default connect()(ThankYou);