import React, { Component } from 'react';
import Axios from 'axios';


class FeedbackItem extends Component {

    handleDelete = ()=>{
        Axios.delete(`/feedback/${this.props.feedback.id}`)
        .then((response)=>{
            //after successful delete GET request call again to update DOM
            this.props.getFeedback();
        }).catch((error)=>{
            console.log('error deleting feedback item', error);
        })
    }

    render(){
        return(
            <tr >
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding}</td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={this.handleDelete}>DELETE</button></td>
            </tr>
        )
    }
}


export default FeedbackItem;