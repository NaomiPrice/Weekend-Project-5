import React, { Component } from 'react';
import {connect} from 'react-redux';
import PageTitle from '../PageTitle/PageTitle';
import Axios from 'axios';
import FeedbackTable from '../FeedbackTable/FeedbackTable';

class Admin extends Component {

   

    render(){
        
        return(
            <div>
                <PageTitle pageTitle={'Feedback Results'}/>
                <FeedbackTable/>
                
            </div>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Admin);