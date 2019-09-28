import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';

class ReviewPage extends Component {

    handleSubmit = ()=>{
        //post call to add comments to database
        //empty redux feedbackReducer state
        this.props.dispatch({type: 'EMPTY_STATE'})
        //step to thank you page
        this.props.history.push('/thank-you');
    }
    render(){
        let feedback = this.props.reduxState.feedbackReducer;
        return(
            <div>
                <PageTitle pageTitle={'Review Your Feedback'}/>
                {/* display answers from redux state */}
                <div>
                    <h3>Feelings: {feedback.feeling}</h3>
                    <h3>Understanding: {feedback.understanding}</h3>
                    <h3>Support: {feedback.support}</h3>
                    <h3>Comments: {feedback.comments}</h3>
                </div>
                <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ReviewPage);