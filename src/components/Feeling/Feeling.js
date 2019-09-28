import React, { Component } from 'react';
import Select from '../Select/Select';

class Feeling extends Component {
    
    pageAdvance = ()=>{
        //step to the next page
        this.props.history.push('/understanding')
    }

    render(){
        
        return(
            <div>
                <div className="pageQuestion">
                    <h2>How are you feeling today?</h2>
                </div>
                <Select pageAdvance={this.pageAdvance}
                        description={`Feeling?: 1 for "I'm stressed", 5 for "feeling great!"`}/>
            </div>
        )
    }
}

export default Feeling;