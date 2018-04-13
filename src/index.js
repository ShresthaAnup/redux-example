import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore } from 'redux';

function productsReducer(state = [], action){
    return state;
}

function userReducer(state = '', action){
    switch(action.type){
        case 'updateUser':
            return action.payload.user
    }
    return state;
}

const allReducers = combineReducers({
    products: productsReducer,
    user: userReducer
});

const store = createStore(
    allReducers, 
    {
    products: [{name: 'motorola'},{name: 'lenovo'}],
    user: 'Anup'
    },
    window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'Benson'
    }
}

store.dispatch(updateUserAction);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
