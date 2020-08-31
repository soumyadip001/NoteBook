import React from 'react';
import './App.css';

import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';

import Note from "./Components/Note";

const composeEnhancers = typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Note />
    </div>
    </Provider>
  );
}

export default App
