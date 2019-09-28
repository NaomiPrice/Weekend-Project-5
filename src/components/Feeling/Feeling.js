import React, { Component } from 'react';
import Select from '../Select/Select';
import PageTitle from '../PageTitle/PageTitle';
import {connect} from 'react-redux';

class Feeling extends Component {
    
    pageAdvance = (answer)=>{
        console.log(answer)
        //update redux with answer value received from child
        this.props.dispatch({type: 'SEND_FEEDBACK_VALUE', payload: {feeling: answer}})
        //step to the next page
        this.props.history.push('/understanding')
    }

    render(){
        
        return(
            <div>
                <PageTitle pageTitle={'How are you feeling today?'}/>
                <Select pageAdvance={this.pageAdvance}
                        description={`Feeling?: 1 for "I'm stressed", 5 for "feeling great!"`}/>
            </div>
        )
    }
}

export default connect()(Feeling);