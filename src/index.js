import React from 'react';
// import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Elements } from '@stripe/react-stripe-js';

import App from './App';
// import './index.scss';
import { persistor, store } from './store/store';
import { stripePromise } from './utils/stripe/stripe.utils';
import * as serviceWorkerRegistration from "./serviceWorkerRegistration"
// const rootElement = document.getElementById("root");
// render(
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  // </React.StrictMode>
  // ,rootElement

);
        
serviceWorkerRegistration.register();