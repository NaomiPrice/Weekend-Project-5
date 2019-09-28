import React, { Component } from 'react';

class Select extends Component {
    state = {
        answer: ''
    }
    handleChange = (event)=>{
        //on answer selection - update local state with value selected
        this.setState({
            answer: event.target.value
        })
    }

    handleClick = ()=>{
        //verify a selection has been made
        if (this.state.answer === ''){
            return alert('Please make a selection before going to the next question')
        }
        // run pageAdvance to go to next page - send parent state value of answer
        this.props.pageAdvance(this.state.answer);
    }

    render(){
        return(
                <div className="pageInput">
                    <label>{this.props.description}</label>
                    <br></br>
                    <select onChange={this.handleChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>

                    <button onClick={this.handleClick}>NEXT</button>
                </div>
        )
    }
}

export default Select;