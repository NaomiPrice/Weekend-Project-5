import React, { Component } from 'react';
import {connect} from 'react-redux';
import Axios from 'axios';
import FeedbackItem from '../FeedbackItem/FeedbackItem';

class FeedbackTable extends Component {

    render(){
        
        return(
            <table>
                <thead>
                    <tr>
                    <th>Feeling</th>
                    <th>Understanding</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.reduxState.allTheFeedbackReducer.map(feedback =>{
                    return <FeedbackItem feedback={feedback}/>
                            })}
                </tbody>
            </table>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(FeedbackTable);