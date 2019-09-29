import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

const initialState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

const feedbackReducer = (state= initialState, action)=>{
    switch(action.type){
        case 'SEND_FEEDBACK_VALUE':
            return {...state, ...action.payload}
        case 'EMPTY_STATE':
            return initialState
        default: 
            return state;
    }
}

const allTheFeedbackReducer = (state=[], action)=>{
    if (action.type === 'GET_FEEDBACK'){
        return action.payload
    }
    return state;
}

const reduxStore = createStore(
    combineReducers({
        feedbackReducer,
        allTheFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

registerServiceWorker();
