import React, { Component } from 'react';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Comment extends Component {
    state = {
        comments: '',
    }
    pageAdvance = (answer)=>{
        console.log(this.state.commemts)
        //update redux with answer value from input field
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {comments: this.state.comments}})
        //step to the next page
        this.props.history.push('/review')
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
                <input type="text" onChange={this.handleChange}></input>
                <button onClick={this.pageAdvance}>NEXT</button>
            </div>
        )
    }
}

export default connect()(Comment);