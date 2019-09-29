import React, { Component } from 'react';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Understanding extends Component {

    pageAdvance = (answer)=>{
        console.log(answer)
        //update redux with answer value received from child
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {understanding: answer}})
        //step to the next page
        this.props.history.push('/support')
    }

    pageBack = ()=>{
        this.props.history.push('/feeling');
    }

    render(){
        return(
            <div>
                <PageTitle pageTitle={'How well are you understanding the content?'}/>
                <Select pageAdvance={this.pageAdvance}
                        pageBack ={this.pageBack}
                        answer={this.props.reduxState.feedbackReducer.understanding}
                        description={`Understanding?: 1 for "I'm totally lost", 5 for "I've got this!"`}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Understanding);