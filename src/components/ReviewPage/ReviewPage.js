import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Axios from 'axios';

class ReviewPage extends Component {

    handleSubmit = ()=>{
        //post call to add feedback to server then to db
       Axios.post('/feedback', this.props.reduxState.feedbackReducer)
       .then ((response)=>{
           console.log(response);
       }).catch((error)=>{
           console.log('error adding new feedback', error)
       })
        //step to thank you page
        this.props.history.push('/thank-you');
    }

    pageBack = ()=>{
        this.props.history.push('/comments');
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
                <button onClick={this.pageBack}>GO BACK</button>
                <button onClick={this.handleSubmit}>SUBMIT FEEDBACK</button>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(ReviewPage);