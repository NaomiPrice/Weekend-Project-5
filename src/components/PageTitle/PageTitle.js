import React, { Component } from 'react';


class PageTitle extends Component {

    render(){
        return(
            <div className="pageTitle">
                <h2>{this.props.pageTitle}</h2>
            </div>
                
        )
    }
}

export default PageTitle;