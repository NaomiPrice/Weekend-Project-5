import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Axios from 'axios';
import FeedbackTable from '../FeedbackTable/FeedbackTable';

class Admin extends Component {

   componentDidMount = ()=>{
       this.getFeedback();
   }

   getFeedback = ()=>{
       Axios.get('/feedback').then((response)=>{
           //send data from DB to Redux state 
           this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data})
       }).catch((error)=>{
           console.log('error getting all feedback', error);
       })
   }

    render(){
        
        return(
            <div>
                <PageTitle pageTitle={'Feedback Results'}/>
                <FeedbackTable getFeedback={this.getFeedback}/>
                
            </div>
        )
    }
}

export default connect()(Admin);