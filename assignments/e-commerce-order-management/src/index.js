import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/Store';
import { Provider } from 'react-redux';
import './css/Login.css';
import './css/Products.css';
import './css/Orders.css';




ReactDOM.render(


  <React.StrictMode>
     <Provider store={store}>
    <App />
  </Provider>
      
  </React.StrictMode>,
  document.getElementById('root')
);


