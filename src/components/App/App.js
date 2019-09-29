import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';
import Home from '../Home/Home';
import ThankYou from '../ThankYou/ThankYou';
import Admin from '../Admin/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
        
          <Route path="/" exact component={Home}></Route>
          <Route path="/feeling" component={Feeling}></Route>
          <Route path="/understanding" component={Understanding}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/comments" component={Comments}></Route>
          <Route path="/review" component={ReviewPage}></Route>
          <Route path="/thank-you" component={ThankYou}></Route>
          <Route path="/admin" component={Admin}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
