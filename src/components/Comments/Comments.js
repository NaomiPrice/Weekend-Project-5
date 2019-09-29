import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Comment extends Component {
    //initialize local state with value from redux state
    state = {
        comments: this.props.reduxState.feedbackReducer.comments
    }
    pageAdvance = ()=>{
        //update redux with answer value from input field
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {comments: this.state.comments}})
        //step to the next page
        this.props.history.push('/review')
    }

    pageBack = ()=>{
        this.props.history.push('/support');
    }

    handleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            comments: event.target.value
        })
    }

    render(){
        return(
            <div>
                <PageTitle pageTitle={'Any comments you want to leave?'}/>
                <label>Comments</label>
                <br></br>
                <input value={this.state.comments}type="text" onChange={this.handleChange}></input>
                <br></br>
                <button onClick={this.pageBack}>GO BACK</button>
                <button onClick={this.pageAdvance}>NEXT</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Comment);