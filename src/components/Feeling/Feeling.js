import React, { Component } from 'react';

class Feeling extends Component {

    handleNext = ()=>{
        //step to the next page
        this.props.history.push('/understanding')
    }

    render(){
        return(
            <div>
                <div className="pageQuestion">
                    <h2>How are you feeling today?</h2>
                </div>
                <div className="pageInput">
                    <label>Feeling?: 1 for "I'm stressed", 5 for "feeling great!"</label>
                    <br></br>
                    <select>
                        <option value="">--Please choose an option--</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>

                    <button onClick={this.handleNext}>NEXT</button>
                </div>
                
            </div>
        )
    }
}

export default Feeling;