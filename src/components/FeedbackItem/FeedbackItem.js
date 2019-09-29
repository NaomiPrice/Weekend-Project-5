import React, { Component } from 'react';
import {connect} from 'react-redux';


class FeedbackItem extends Component {

    render(){
        return(
            <tr >
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <button>DELETE</button>
            </tr>
        )
    }
}


export default FeedbackItem;