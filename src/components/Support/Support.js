import React, { Component } from 'react';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Support extends Component {

    pageAdvance = (answer)=>{
        console.log(answer)
        //update redux with answer value received from child
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {support: answer}})
        //step to the next page
        this.props.history.push('/comments')
    }
    
    pageBack = ()=>{
        this.props.history.push('/understanding');
    }

    render(){
        return(
            <div>
                <PageTitle pageTitle={'How well are you being supported?'}/>
                <Select pageAdvance={this.pageAdvance}
                        pageBack ={this.pageBack}
                        answer={this.props.reduxState.feedbackReducer.support}
                        description={`Support?: 1 for "I feel abandoned", 5 for "I feel supported!"`}/>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Support);