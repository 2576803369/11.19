import ReactDOM from 'react-dom'
import React from 'react'
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App.jsx'
import { rootReducer } from '@/reducers'

const store=legacy_createStore(rootReducer);
// 合并后的state  {counter:{count:0,user:{}}}
ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("app")
);


