// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// reportWebVitals();
import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';

import store, { history } from './store';
import App from "./components/App";
import Loader from './components/shared/Loader';


render(
  <Provider store={store}>
    {/*<ConnectedRouter history={history}>*/}
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    {/*</ConnectedRouter>*/}
  </Provider>,
  document.getElementById('root'),
);
