import React, { Component } from 'react';

class Select extends Component {
    //local state to hold answer value provided by user - set local state to be respective redux state value
    state = {
        answer: this.props.answer
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
                    {/* //selection description provided by parent component */}
                    <label>{this.props.description}</label>
                    <br></br>
                    {/* controled input to display redux state */}
                    <select value={this.state.answer} onChange={this.handleChange}>
                        <option value="" >--Please choose an option--</option>
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                    </select>
                    <br></br>
                    <button onClick={this.props.pageBack}>GO BACK</button>
                    <button onClick={this.handleClick}>NEXT</button>
                </div>
        )
    }
}


export default Select;