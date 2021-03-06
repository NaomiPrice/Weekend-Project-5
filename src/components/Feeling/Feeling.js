import React, { Component } from 'react';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Feeling extends Component {
    
    pageAdvance = (answer)=>{
        console.log(answer)
        //update redux with answer value received from child when function is called
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {feeling: answer}})
        //step to the next page
        this.props.history.push('/understanding')
    }

    pageBack = ()=>{
        this.props.history.push('/');
    }

    render(){
        
        return(
            <div>
                <PageTitle pageTitle={'How are you feeling today?'}/>
                <Select pageAdvance={this.pageAdvance}
                        pageBack ={this.pageBack}
                        answer={this.props.reduxState.feedbackReducer.feeling}
                        description={`Feeling?: 1 for "I'm stressed", 5 for "feeling great!"`}/>
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Feeling);