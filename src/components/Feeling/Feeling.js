import React, { Component } from 'react';

class Feeling extends Component {

    handleNext = ()=>{
        //step to the next page
        this.props.history.push('/understanding')
    }

    render(){
        return(
            <div>
                <div>
                    Tell me all your feelings
                </div>
                <button onClick={this.handleNext}>NEXT</button>
            </div>
            
        )
    }
}

export default Feeling;